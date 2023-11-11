const express = require("express");
const router = express.Router();
const accountController = require("../controller/account");

router.post("/api/login", accountController.loginControl);
router.post("/api/register", accountController.registerControl);
router.post(
  "/api/sendVerificationCode",
  accountController.sendVerificationCodeControl
);
router.post("/api/changePassword", accountController.changePasswordControl);
router.put("/api/resetPassword", accountController.resetPasswordControl);
router.post("/api/login/google", accountController.loginWithGoogleControl);
// router.post("/api/login/facebook", accountController.loginWithFacebookControl);

module.exports = router;
