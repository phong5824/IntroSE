/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import starIcon from "/src/assets/star.png";
import PropTypes from "prop-types";
import { handleRankingRecipes } from "../../action/recipesAction";

let recipes_db = [];

const RecipeRankItem = ({ recipe }) => {
  return (
    <Link
      to={`/recipes/?ID=${recipe.recipe_id}`}
      key={recipe.recipe_id}
      className="recipe-rank-item bg-white rounded-lg shadow overflow-hidden transform transition duration-500 hover:scale-105"
    >
      <img
        src={recipe.img_src}
        alt={recipe.recipe_name}
        className="w-full h-52 object-cover round-lg"
      />
      <div className="p-4 flex flex-col justify-between h-48">
        <div>
          <h3 className="font-bold text-lg">{recipe.recipe_name}</h3>
          <p className="text-gray-700">{recipe.cook_time}</p>
          {/* Placeholder for icons and other details */}
        </div>
        <div className="flex items-end">
          <div>{/* Placeholder for icons and other details */}</div>
          <div className="flex items-center ml-auto">
            <img src={starIcon} alt="Star" className="h-5 w-5 mr-2" />
            <span className="font-bold">{recipe.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

RecipeRankItem.propTypes = {
  recipe: PropTypes.shape({
    img_src: PropTypes.string.isRequired,
    recipe_name: PropTypes.string.isRequired,
    cook_time: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      $numberDouble: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    }).isRequired,
  }).isRequired,
};

let recipes_start = [];
let recipes_time = [];
// eslint-disable-next-line react/prop-types
const RecipeRanking = ({ recipes: initialRecipes = recipes_db }) => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("rating");

  const convertCookTimeToMinutes = (cookTime) => {
    let hoursMatch = cookTime.match(/(\d+)\s*hrs/);
    let minutesMatch = cookTime.match(/(\d+)\s*mins/);

    let hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    let minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

    return hours * 60 + minutes;
  };

  const handleSortByRating = () => {
    setSortBy("rating");
    let sortedRecipes = [...recipes].sort((a, b) => b.rating - a.rating);
    setRecipes(sortedRecipes);
  };

  const handleSortByCookTime = () => {
    setSortBy("cookTime");
    let sortRecipes = [...recipes].sort(
      (a, b) =>
        convertCookTimeToMinutes(a.cook_time) -
        convertCookTimeToMinutes(b.cook_time)
    );
    setRecipes(sortRecipes);
  };

  useEffect(() => {
    const fetchRankingRecipes = async () => {
      recipes_db = await handleRankingRecipes();

      let list_recipes = recipes_db.slice(0, 10);
      setRecipes(list_recipes);
    };
    fetchRankingRecipes();
    console.log(sortBy);
    console.log(sortOrder);
  }, [sortOrder]);

  return (
    <div className="recipe-ranking-container container border-t mx-auto px-4 py-7">
      <div className="flex justify-between items-center mb-4 space-x-4">
        <h2 className="text-2xl font-bold mb-6">Recipes Ranking</h2>
        <div className="flex justify-end mb-4 space-x-4">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              sortBy === "rating" ? "opacity-75" : ""
            }`}
            onClick={handleSortByRating}
          >
            Sort by Rating
          </button>
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              sortBy === "cookTime" ? "opacity-75" : ""
            }`}
            onClick={handleSortByCookTime}
          >
            Sort by Cook Time
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {recipes.map((recipe, index) => (
          <Link to={`/recipes/?ID=${recipe.recipe_id}`} key={recipe.recipe_id}>
            <RecipeRankItem key={index} recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
};

RecipeRankItem.propTypes = {
  recipe: PropTypes.shape({
    img_src: PropTypes.string.isRequired,
    recipe_name: PropTypes.string.isRequired,
    cook_time: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired, // Change this line
  }).isRequired,
};

export default RecipeRanking;
