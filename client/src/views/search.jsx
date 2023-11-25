/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import starIcon from "/src/assets/star.png";
import { handleSearchRecipes } from "./../action/recipesAction";
import { message } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LogoIcon from "../components/modules/LogoIcon";
import Avatar from "../components/modules/Avatar";
import loupe from "/src/assets/loupe.png";

const initialRecipesToShow = 10;

const Search = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const [recipesToShow, setRecipesToShow] = useState(initialRecipesToShow);
  const [name, setName] = useState("");
  const [list_recipes, setListRecipes] = useState([]);

  const location = useLocation();
  const keywords = new URLSearchParams(location.search).get("keywords");

  console.log("keywords", keywords);
  useEffect(() => {
    const fetchRecommendedRecipes = async () => {
      const newRecipes = await handleSearchRecipes(keywords);
      setListRecipes(newRecipes);
      setRecipesToShow(initialRecipesToShow);
    };
    fetchRecommendedRecipes();
  }, [keywords, handleSearchRecipes, initialRecipesToShow, setListRecipes]);

  const handleAvatarClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (name === "") {
      message.warning("Vui lòng điền thông tin tìm kiếm");
      return;
    }
  
    navigate(`/search?keywords=${encodeURIComponent(name)}`);
  };

  console.log("list_recipes", list_recipes);
  let recipes = list_recipes.slice(0, recipesToShow);

  const handleLoadMore = () => {
    setRecipesToShow(20); // Show all recipes
    recipes = list_recipes.slice(0, 20);
  };

  const handleShowLess = () => {
    recipes = list_recipes.slice(0, 10);
    setRecipesToShow(10); // Show initial number of recipes
  };

  return (
    <div className="container border-t mx-auto px-4 py-7">
      <nav className="navbar flex flex-col relative items-center justify-center align-middle px-6 h-[80px] bg-white border-b">
        <Link to="/home">
          <LogoIcon className="flex-shrink-0" />
        </Link>

        <div className="relative w-1/2 rounded-lg">
          <input
            className="search-input w-full px-4 py-2 border bg-green-500 outline-none placeholder-gray-700 pl-10"
            style={{ borderRadius: "12px" }}
            type="text"
            placeholder="Tìm kiếm công thức..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <button
            onClick={handleSearch}
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
          >
            <img src={loupe} alt="Search" className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-shrink-0 flex items-center space-x-10 bg-white">
          <Avatar
            showLoginForm={showLoginForm}
            setShowLoginForm={setShowLoginForm}
            onClick={handleAvatarClick}
          />
        </div>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={recipe.img_src}
              alt={recipe.recipe_name}
              className="w-full h-52 object-cover round-lg"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{recipe.recipe_name}</h3>
              <p className="text-gray-700">{recipe.cook_time}</p>
              <div className="flex items-center justify-between mt-3">
                <div>{/* Placeholder for icons and other details */}</div>
                <div className="flex items-center">
                  <img src={starIcon} alt="Star" className="h-5 w-5 mr-2" />
                  <span className="font-bold">{recipe.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        {recipesToShow > initialRecipesToShow ? (
          <button
            onClick={handleShowLess}
            className="bg-green-500 text-white px-6 py-2 rounded-full"
          >
            Rút gọn
          </button>
        ) : (
          <button
            onClick={handleLoadMore}
            className="bg-green-500 text-white px-6 py-2 rounded-full"
          >
            Xem thêm
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
