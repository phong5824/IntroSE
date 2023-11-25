require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("../model/userModel");

// @route GET API
// @desc GET user
// @access private
const getAccountControl = async (req, res) => {
  try {
    const users = await User.find({ account: req.userid }).populate("account", [
      "email",
      "password",
    ]);

    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// @route POST API/POST
// @desc Create user
// @access private
const createUserControl = async (req, res) => {
  const { user_id, name, gender } = req.body;

  if (!user_id || !name) {
    return res
      .status(400)
      .json({ success: false, message: "User_id or name is required" });
  }

  try {
    console.log(req.userid);
    const newUser = new User({
      user_id: user_id,
      name: name,
      gender: gender,
      account: req.userid,
    });

    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "Create user success", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getProfileControl = async (req, res) => {
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
};

const getFavouriteControl = async (req, res) => {
  const authHeader = req.header("Authorization");
  const token = authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ success: false, message: "Access token not found" });
  }
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const fauvorite_recipes = await User.find({account: decoded.userid}).populate('favourites');

    res
      .status(200)
      .json({ success: true, message: "Favourite recipes of user", fauvorite_recipes});
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};
module.exports = { getAccountControl, createUserControl, getProfileControl,getFavouriteControl};
