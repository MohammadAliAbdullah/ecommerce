const bcrypt = require('bcryptjs');

exports.hashPassword = (password) => {
    try {
        const key = 8;
        const salt = bcrypt.genSalt(12);
        const hash = bcrypt.hashSync(password, key);
        return hash;
    } catch (err) {
        // throw new AppError(err.message);
        console.log(err);
    }
}

exports.checkPassword = (password, passwordHash) => {
    try {
        const validityCheck = bcrypt.compareSync(password, passwordHash);
        return validityCheck;
    } catch (err) {
        // throw new AppError(err.message);
        console.log(err);
    }
}

// const hashPassword = async password => {
//     try {
//         const salt = await bcrypt.genSalt(12);
//         const hash = await bcrypt.hash(password, salt);
//         return hash;
//     } catch (err) {
//         throw new AppError(err.message);
//     }
// };
// module.exports = hashPassword

// bcrypt discription:
// {
//     setRandomFallback: [Function (anonymous)],
//     genSaltSync: [Function (anonymous)],
//     genSalt: [Function (anonymous)],
//     hashSync: [Function (anonymous)],
//     hash: [Function (anonymous)],
//     compareSync: [Function (anonymous)],
//     compare: [Function (anonymous)],
//     getRounds: [Function (anonymous)],
//     getSalt: [Function (anonymous)],
//     encodeBase64: [Function: base64_encode],
//     decodeBase64: [Function: base64_decode]
//   }