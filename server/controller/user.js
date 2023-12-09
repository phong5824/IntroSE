require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("../model/userModel");
const Account = require("../model/accountModel");
const verifyToken = require("../middleware/account");
const mongoose = require('mongoose');

// @route GET API
// @desc GET user
// @access private

const getAllUsersControl = async (req, res) => {
  try {
    const currentUser = await User.findOne({ account: req.userid });
    if (!currentUser) {
      return res.status(403).json({ success: false, message: "User not found" });
    }
    if (!currentUser.is_admin) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }

    // Lấy tất cả người dùng
    const allUsers = await User.find({}).populate("account", [
      "email",
      "password",
    ]).sort({ user_id: 1 });

    res.status(200).json({ success: true, users: allUsers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


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

const changePassword = async (req, res) => {
  const { userId, newPassword } = req.body;

  try {
    // Find the user by user_id in the user collection
    const user = await User.findOne({ user_id: userId });

    // Kiểm tra nếu người dùng không tồn tại
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Find the account by _id in the account collection
    const account = await Account.findById(user.account);

    // Update the account's password directly without hashing
    if (newPassword && newPassword.trim() !== "") {
      // Update the account's password directly without hashing
      account.password = newPassword;

      // Save the updated account document
      await account.save();

      return res.status(200).json({ success: true, message: 'Password changed successfully' });
    } else {
      return res.status(400).json({ success: false, message: 'New password is empty or undefined' });
    }
  } catch (error) {
    console.error('Error changing password:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.body;

  try {
    // Find the user by user_id in the user collection
    const user = await User.findOne({ user_id: userId });
    // Kiểm tra nếu người dùng không tồn tại
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found aaaaaa' });
    }

    // Xóa người dùng từ collection
    await User.deleteOne({ user_id: userId });


    const account = await Account.findByIdAndDelete(user.account);

    return res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};





module.exports = {
  getAllUsersControl,
  getAccountControl,
  createUserControl,
  getProfileControl,
  getFavouriteControl,
  addFavouriteControl,
  changePassword,
  deleteUser,
};
