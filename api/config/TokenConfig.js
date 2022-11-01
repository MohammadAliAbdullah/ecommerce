require('dotenv').config();
const secretAccess = process.env.SECRET_TOKEN_ACCESS;
const expireAccess = process.env.EXPIRE_TOKEN_ACCESS;
const secretRefresh = process.env.SECRET_TOKEN_REFRESH;
const expireRefresh = process.env.EXPIRE_TOKEN_REFRESH;
const secretRestore = process.env.SECRET_TOKEN_RESTORE_PASSWORD;
const expireRestore = process.env.EXPIRE_TOKEN_RESTORE_PASSWORD;
const countTokenLimit = process.env.TOKEN_LIMIT_COUNT_DIVICE;

module.exports = {
    secretAccess,
    expireAccess,
    secretRefresh,
    expireRefresh,
    countTokenLimit,
    secretRestore,
    expireRestore
};