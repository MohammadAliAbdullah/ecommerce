const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('../config/TokenConfig');

const sign = (playload, secretToken, options) => {
    try {
        const token = jwt.sign(playload, secretToken, options);
        return token;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.createAccessToken = (user) => {
    try {
        const payload = {
            id: user.id
        };

        const options = {
            algorithm: "HS512",
            subject: user.id.toString(),
            expiresIn: config.expireAccess
        };
        const token = sign(payload, config.secretAccess, options);

        return token;
    } catch (err) {
        throw new Error(err.message);
    }
}
exports.createRefreshToken = (user) => {
    try {
        const payload = {
            id: user.id
        };

        const options = {
            algorithm: "HS512",
            subject: user.id.toString(),
            expiresIn: config.expireRefresh
        };
        const token = sign(payload, config.secretRefresh, options);
        return token;
    } catch (err) {
        throw new Error(err.message);
    }
}
exports.addRefreshTokenUser = (user, token) => {

    try {
        if (user.refreshTokens.length >= config.countTokenLimit) {
            user.refreshTokens = [];
        }
        const objectId = mongoose.Types.ObjectId();
        user.refreshTokens.push({ _id: objectId, token });
        user.save();

        return `${objectId}::${token}`;
    } catch (err) {
        throw new Error(err.message);
    }
}
exports.verifyRefreshToken = (token) => {

    // return false;
    try {
        const refreshTokenHash = token.split("::")[1];
        const data = jwt.verify(refreshTokenHash, config.secretRefresh);
        console.log(data);
        return data;
    } catch (err) {
        return false;
    }
};

exports.checkRefreshTokenUser = (user, token) => {
    try {
        const refreshTokenId = token.split("::")[0];

        const isValid = user.refreshTokens.findOne(refreshToken => refreshToken._id.toString() === refreshTokenId.toString());

        return !!isValid;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.removeRefreshTokenUser = (user, token) => {
    try {
        const refreshTokenId = token.split("::")[0];

        const refreshTokensFiltered = user.refreshTokens.filter(refreshToken => {
            return refreshToken._id.toString() !== refreshTokenId.toString();
        });

        user.refreshTokens = refreshTokensFiltered;
        user.save();

        return true;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.createRestorePasswordToken = user => {
    try {
        const payload = {
            id: user._id
        };

        const options = {
            algorithm: "HS512",
            subject: user._id.toString(),
            expiresIn: config.expireRestore
        };

        const token = sign(payload, config.secretRestore, options);

        return token;
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.verifyRestorePasswordToken = token => {
    try {
        const data = jwt.verify(token, config.secretRestore);
        return data;
    } catch (err) {
        return false;
    }
};
// 
exports.verifyAccessToken = token => {
    try {
      const data = jwt.verify(token, config.secretAccess);
  
      return data;
    } catch (err) {
      return false;
    }
  };