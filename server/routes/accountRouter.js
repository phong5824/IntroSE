const express = require("express");
const router = express.Router();
const accountController = require("../controller/accountController");

router.post("/login", accountController.loginControl);
router.post("/register", accountController.registerControl);

module.exports = router;
