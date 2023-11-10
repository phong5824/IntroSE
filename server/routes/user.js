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

// @route POST API/POST
// @desc Post profile
// @access private

router.get("/profile", verifyToken, async (req, res) => {
  const authHeader = req.header("Authorization");
  const token = authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ success: false, message: "Access token not found" });
  }
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const e_user = await User.findOne({ account: decoded.userid }).populate(
      "account",
      ["email"]
    );

    res
      .status(200)
      .json({ success: true, message: "Profile of user", user: e_user });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
});

module.exports = router;
