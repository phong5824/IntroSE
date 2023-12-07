/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../modules/Navbar";
import Footer from "../modules/Footer";
import { useLocation } from "react-router-dom";
import { handleSearchRecipesID } from "../../action/recipesAction";
import Loading from "../modules/Loading";
import "./Profile.css";
function RecipeDetail() {
  const recipeId = new URLSearchParams(useLocation().search).get("ID");
  const [recipe, setRecipe] = React.useState(null);

  const fetchRecipes = async () => {
    handleSearchRecipesID(recipeId)
      .then((dataGetRecipe) => {
        setRecipe(dataGetRecipe);
      })
      .catch((err) => {
        // toast message (err)
        // console.log(err)
        setRecipe(null);
      });
  };

  if (recipeId) {
    fetchRecipes();
  }

  // Should return error screen
  if (!recipe) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <Loading />;
      </div>
    );
  }

  return (
    <div className="home-wrapper min-h-screen flex flex-col overflow-y-auto">
      <NavBar />

      <div className="container mx-auto p-8 border rounded-lg shadow-lg">
        <div className="text-center">
          {/* Added text-center class */}
          <h1 className="text-3xl font-bold mb-4">{recipe.recipe_name}</h1>
          <img
            src={recipe.img_src}
            alt={recipe.recipe_name}
            className="mb-4 rounded-lg mx-auto max-w-md"
          />
          {/* Added mx-auto class */}
        </div>

        <div className="flex mb-4 space-x-2">
          <div className="w-4/5 pr-8 bg-green-200 rounded-md py-2">
            <h2 className="ml-2 text-xl font-bold mb-2">Ingredients</h2>
            <ul className="ml-4 list-disc list-inside">
              {recipe.ingredients_list.map((ingredient, index) => (
                <li key={index}>{ingredient.trim()}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/5 grid grid-cols-1/4 bg-yellow-400 rounded-md">
            <button className=" text-white p-2 rounded-md">Save Recipe</button>
            <button className=" text-white p-2 rounded-md">Share</button>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Preparation Time</h2>
          <p>{recipe.prep_time}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Cool Time</h2>
          <p>{recipe.cook_time}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Instructions</h2>
          <ol className="prose prose-blue list-decimal list-inside">
            {recipe.directions.split("\n").map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Comments</h2>
          {comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <p className="font-bold">{comment.user}</p>
              <p>{comment.comment}</p>
              {comment.rating && (
                <p className="text-yellow-400">{`Rating: ${comment.rating}/5`}</p>
              )}
            </div>
          ))}
        </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default RecipeDetail;
