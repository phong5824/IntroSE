require("dotenv").config();
const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Recipes = require("../model/recipeModel");
const recipesController = require("../controller/recipes");


router.get("/", recipesController.getRecommendedRecipesControl);

module.exports = router;