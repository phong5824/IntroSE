require("dotenv").config();
const express = require("express");
const router = express.Router();
const accountModel = require("../model/accountModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const User = require("../model/userModel");
const userController = require("../controller/user");
const verifyToken = require("../middleware/account");

// @route GET API
// @desc GET user
// @access private
router.get("/", verifyToken, userController.getAccountControl);

// @route POST API/POST
// @desc Create user
// @access private
router.post("/", verifyToken, userController.createUserControl);

// @route GET API/GET
// @desc Get profile
// @access private

router.get("/profile", verifyToken, userController.getProfileControl);

router.post("/favourites", verifyToken, userController.addFavouriteControl);

router.put("/edit", verifyToken, userController.editProfileUserControl);

router



module.exports = router;
