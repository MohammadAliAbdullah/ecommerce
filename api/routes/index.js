var router = require("express").Router();
const auth = require('../controllers/AuthController');
const duplicate = require('../middlewares/VerifyDuplicateEmailMiddleware');
module.exports = (app) => {
    router.post("/signup", [duplicate.duplicateUser], auth.signup);
    router.post("/signin", auth.signin);
    router.post("/refresh-tokens", auth.refreshTokens);
    router.post("/logout", auth.logout); // Must be check Authorize user.
    app.use('/api/auth', router);
}