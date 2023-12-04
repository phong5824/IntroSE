/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import { useLocation } from "react-router-dom";
import { handleSearchRecipesID } from "./../action/recipesAction";
import Loading from "../components/modules/Loading";
import Clock from "/src/assets/clock.png";
import Bookmark from "/src/assets/bookmark.png";
import Share from "/src/assets/share.png";
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
      </div>);
  }

  return (
    <div className="home-wrapper min-h-screen flex flex-col overflow-y-auto">
      <NavBar />

      <div className="container mx-auto p-8 border rounded-lg shadow-lg">
        <div className="text-center">
          {/* Added text-center class */}
          <h1 className="text-4xl font-bold mb-4">{recipe.recipe_name}</h1>
          <img
            src={recipe.img_src}
            alt={recipe.recipe_name}
            className="mb-4 rounded-lg mx-auto max-w-md"
          />
          {/* Added mx-auto class */}
        </div>


        <div className="flex justify-center mb-4">


          <div className="w-3/4 pr-8">
            <div className="w-full pr-8 bg-green-200 rounded-md ml-20 py-2 shadow-lg">
              <div className="flex items-center mb-2">
                <h2 className="ml-4 text-2xl font-bold">Nguyên liệu</h2>
                <img
                  src={Clock}
                  alt='time'
                  className="h-5 w-5 ml-6 mt-1"
                />
                <span className="text-gray-700 ml-1 mt-1">{recipe.prep_time}</span>
              </div>

              <ul className="ml-8 list-inside">
                {recipe.ingredients_list.map((ingredient, index) => {
                  const match = ingredient.match(/^\d+/);
                  if (match) {
                    const number = match[0];
                    const ingredientText = ingredient.replace(number, '');

                    return (
                      <li key={index} className="mb-2 pb-2 border-b border-gray-800">
                        <strong>{number}</strong> {ingredientText.trim()}
                      </li>
                    );
                  }

                  return (
                    <li key={index} className="mb-2 pb-2 border-b border-gray-800">
                      {ingredient.trim()}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-full pr-8 bg-green-200 rounded-md ml-20 py-2 mt-4 shadow-lg">
              <div className="flex items-center mb-2">
                <h2 className="ml-4 text-2xl font-bold">Hướng dẫn nấu nướng</h2>
                <img
                  src={Clock}
                  alt='time'
                  className="h-5 w-5 ml-6 mt-1"
                />
                <span className="text-gray-700 ml-1 mt-1">{recipe.cook_time}</span>
              </div>


              <div className="ml-8 mb-2">
                <ol className="prose prose-blue list-decimal list-inside">
                  {recipe.directions.split("\n").map((step, index) => (
                    <li key={index} className="mb-2 pb-2 border-b border-gray-800">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div className="w-1/4 h-screen ml-20 flex flex-col justify-start">
            <div className="w-72 grid grid-cols-1/4  bg-green-200 shadow-black rounded-md p-3 space-y-2 shadow-lg">
              <button className="text-gray-900 p-1 rounded-md border border-black bg-yellow-200 flex items-center justify-center space-x-2">
                <img src={Bookmark} alt="Bookmark Icon" className="h-4 w-4" />
                <span>Lưu Món</span>
              </button>

              <button className="text-gray-900 p-1 rounded-md border border-black bg-yellow-200 flex items-center justify-center space-x-2">
                <img src={Share} alt="Share Icon" className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>


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
