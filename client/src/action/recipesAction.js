import axios from "axios";
import { message } from "antd";

// Get recomended recipes
export const handleRecommendedRecipes = async () => {
  try {
    const result = await axios.get("http://127.0.0.1:8000/home");

    if (result.data.success === true) {
      return result.data.recommended_recipes;
    } else {
      message.error(result.data.error);
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};

export const handleRankingRecipes = async () => {
  try {
    const result = await axios.get("http://127.0.0.1:8000/");

    if (result.data.success === true) {
      return result.data.ranking_recipes;
    } else {
      message.error(result.data.error);
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};

export const handleSearchRecipes = async (keywords) => {
  try {
    console.log(keywords);
    const result = await axios.get(
      `http://127.0.0.1:8000/search/?keywords=${encodeURIComponent(keywords)}`
    );
    if (result.data.success === true) {
      console.log(result.data.recipes);
      return result.data.recipes;
    } else {
      message.error(result.data.error);
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};

export const handleSearchRecipesID = async (ID) => {
  try {
    const result = await axios.get(`http://127.0.0.1:8000/recipes/?ID=${ID}`);
    if (result.data.success === true) {
      return result.data.recipe;
    } else {
      message.error(result.data.error);
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};
