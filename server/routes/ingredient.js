const express = require("express");
const router = express.Router();
const ingredientController = require("../controller/ingredient");

router.get("/", ingredientController.getAllIngredients);
// router.post("/api/login/facebook", accountController.loginWithFacebookControl);

module.exports = router;
