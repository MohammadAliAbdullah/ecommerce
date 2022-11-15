var router = require("express").Router();
const auth = require('../controllers/AuthController');
const duplicate = require('../middlewares/VerifyDuplicateEmailMiddleware');
const authorize = require('../middlewares/AuthorizeMiddleware');

module.exports = (app) => {
    router.post("/signup", [duplicate.duplicateUser], auth.signup);
    router.post("/signin", auth.signin);
    router.post("/refresh-tokens", auth.refreshTokens);
    router.post("/logout", [authorize.check], auth.logout); // Must be check Authorize user.
    router.post("/auth/restore-password", auth.restorePassword);
    router.post("/auth/confirm-restore-password", auth.confirmRestorePassword);
    app.use('/api/auth', router);
}