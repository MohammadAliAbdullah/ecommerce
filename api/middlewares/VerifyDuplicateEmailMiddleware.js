const validEmail = require('../utils/MailValidation');
const db = require('../models');
const User = db.user;

exports.duplicateUser = (req, res, next) => {
    const isEmail = validEmail.isEmailValid(req.body.email);
    if (!isEmail) {
        res.status(400).send({ message: "Failed! 'Email Format Not Correct!" });
        return;
    }
    User.findOne({ email: req.body.email })
        .exec((err, email) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (email) {
                res.status(400).send({ message: "Failed! Email is already in use!" });
                return;
            }
            next();
        });
}