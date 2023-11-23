require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const Recipe = require("../model/recipeModel");
const User = require("../model/userModel");

// @route GET API
const getRankingRecipesControl = async (req, res) => {
  try {
    const ranking_recipes = await Recipe.find({})
      .sort({ rating: -1 })
      .limit(20);
    res.json({ success: true, ranking_recipes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getRecommendedRecipesControl = async (req, res) => {
  try {
    const users = await User.find({ favourites: { $type: "array" } });

    const favourites = users.map((user) => user.favourites);
    const favourites_list = [].concat(...favourites);
    const favourites_set = new Set(favourites_list);
    const favourites_list_unique = [...favourites_set];

    const recommended_recipes = await Recipe.find({recipe_id: {$in: favourites_list_unique}})
      .sort({ rating: -1 })
      .limit(15);
    res.json({ success: true, recommended_recipes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = { getRecommendedRecipesControl, getRankingRecipesControl };
