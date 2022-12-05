const db = require('../models');
const User = db.user;
const Role = db.role;

/*
* @Mohammad Ali Abdullah
* @function show all users api
* @date 03-12-2022
*/

exports.users = (req, res) => {
    User.find({}, function (err, result) {
        if (err) throw new err();
        // if (err) return handleError(err);
        // console.log(result);
        return res.json(result);
    })
}

// exports.getUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// }