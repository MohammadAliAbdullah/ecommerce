const db = require('../models');
const password = require('../services/PasswordService');
const mail = require('../services/MailService');
const validEmail = require('../utils/MailValidation');
const TokenService = require('../services/TokenService');
const User = db.user;
const Role = db.role;
// jwt token
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: password.hashPassword(req.body.password),
        role: req.body.role,
        activeStatus: req.body.activeStatus,
        createdBy: req.body.createdBy,
    });
    // insert data
    user.save(user)
        .then((data) => {
            if (data) {
                // data insert after send mail user email
                const send = mail.mailSend(data.email);
                res.send(data);
            } else {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the User."
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
}

exports.signin = (req, res) => {
    const isEmail = validEmail.isEmailValid(req.body.username);
    const find = isEmail ? { email: req.body.username } : { username: req.body.username };
    User.findOne(find)
        .populate("roles", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            try {
                // match password 
                const valid = password.checkPassword(req.body.password, user.password);
                if (!valid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
                }
                const accessToken = TokenService.createAccessToken(user);
                const refreshTokenHash = TokenService.createRefreshToken(user);
                const refreshToken = TokenService.addRefreshTokenUser(user, refreshTokenHash);
                res.json({
                    accessToken,
                    refreshToken,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        username: user.username
                    }
                });
            } catch (err) {
                res.status(401).send({
                    message: err.message || "Some error occurred while creating the User."
                });
            }
        });

}

exports.refreshTokens = (req, res) => {
    const refreshTokenRequest = req.body.refreshToken;

    const verifyData = TokenService.verifyRefreshToken(refreshTokenRequest);

    if (!verifyData) {
        throw new Error("Refresh token invalid or expired", 400);
    }

    const user = User.findOne({ _id: verifyData.id });
    const isValid = TokenService.checkRefreshTokenUser(user, refreshTokenRequest);

    if (!isValid) {
        throw new Error("Refresh token invalid or expired", 400);
    }

    TokenService.removeRefreshTokenUser(user, refreshTokenRequest);

    const accessToken = TokenService.createAccessToken(user);
    const refreshTokenHash = TokenService.createRefreshToken(user);
    const refreshToken = TokenService.addRefreshTokenUser(user, refreshTokenHash);
    res.json({ accessToken, refreshToken });
}

exports.logout = (req, res, next) => {
    const user = User.findOne({ _id: req.userId });
    if (!user) {
        throw new Error("UserId not found in request", 401);
    }

    user.refreshTokens = [];
    user.save();
    res.json({ status: "success" });
}

