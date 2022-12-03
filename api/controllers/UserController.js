// user controller
const db = require('../models');
const User = db.user;
const Role = db.role;

exports.users = (req, res) => {
    User.find({}, function (err, result) {
        if (err) throw new err();
        // if (err) return handleError(err);
        // console.log(result);
        return res.json(result);
    })
}