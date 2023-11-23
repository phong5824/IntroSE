require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const Recipe = require("../model/recipeModel");

// @route GET API
const getRecommendedRecipesControl = async (req, res) => {
    try {
      const recommended_recipes = await Recipe.find({}).sort({ rating: -1 }).limit(20);
      res.json({ success: true, recommended_recipes });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };


  module.exports = {getRecommendedRecipesControl};

  