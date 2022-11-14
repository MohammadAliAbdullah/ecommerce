const TokenService = require('../services/TokenService');
exports.check = (req, res, next) => {

    if (req.headers.authorization) {

        const token = req.headers.authorization.split("::")[1];
        console.log(token);
        if (!token) {
            throw new Error("Access token not found in request", 400);
        }

        const verifyData = TokenService.verifyAccessToken(token);

        if (!verifyData) {
            throw new Error("Refresh token invalid or expired", 401);
        }

        req.userId = verifyData.id;
        return next();
    }

    throw new Error("Unauthorized", 401);
}