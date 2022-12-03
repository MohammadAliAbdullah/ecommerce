var router = require("express").Router();
const auth = require('../controllers/AuthController');
const user = require('../controllers/UserController');
const duplicate = require('../middlewares/VerifyDuplicateEmailMiddleware');
const authorize = require('../middlewares/AuthorizeMiddleware');

module.exports = (app) => {
    router.post("/signup", [duplicate.duplicateUser], auth.signup);
    router.post("/signin", auth.signin);
    router.post("/refresh-tokens", auth.refreshTokens);
    router.post("/logout", [authorize.check], auth.logout); // Must be check Authorize user.
    router.post("/restore-password", auth.restorePassword);
    router.post("/confirm-restore-password", auth.confirmRestorePassword);
    // user 
    router.get("/users", user.users);
    app.use('/api/auth', router);
}