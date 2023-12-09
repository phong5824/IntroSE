require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("../model/userModel");
const verifyToken = require("../middleware/account");

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
  try {
    const e_user = await User.findOne({ account: req.userid }).populate(
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
  try {
    const fauvorite_recipes = await User.find({ account: req.userid }).populate(
      "favourites"
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Favourite recipes of user",
        fauvorite_recipes,
      });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

const addFavouriteControl = async (req, res) => {
  try {
    let { recipeId } = req.body; // ID của công thức từ request body

    recipeId = parseInt(recipeId);
    console.log(recipeId);

    // Tìm người dùng và thêm ID công thức vào mục yêu thích
    const user = await User.findOneAndUpdate(
      { account: req.userid },
      { $addToSet: { favourites: recipeId } }, // $addToSet thêm một giá trị vào một mảng chỉ khi giá trị đó chưa tồn tại trong mảng
      { new: true } // Trả về người dùng đã được cập nhật
    );

    res.status(200).json({
      success: true,
      message: 'Added recipe to favourites',
      favourites: user.favourites,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

const editProfileUserControl = async (req, res) => {
  const updateData = req.body;
  const user_id = updateData.user_id;
  delete updateData.user_id;

  try {
    // Sử dụng findOneAndUpdate để tìm và cập nhật một document theo điều kiện
    const updatedUser = await User.findOneAndUpdate(
      { user_id: user_id },
      { $set: updateData },
      { new: true } // Trả về document đã được cập nhật
    ).populate(
      "account",
      ["email"]
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


module.exports = {
  getAccountControl,
  createUserControl,
  getProfileControl,
  getFavouriteControl,
  addFavouriteControl,
  editProfileUserControl,
};
