const express = require("express");
const router = express.Router();
const accountController = require("../controller/accountController");

router.post("/api/login", accountController.loginControl);
router.post("/api/register", accountController.registerControl);
router.post("/api/login/google", accountController.loginWithGoogleControl);

module.exports = router;
