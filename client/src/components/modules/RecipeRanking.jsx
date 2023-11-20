import React, { useState, useEffect } from "react";
import starIcon from "/src/assets/star.png";

const recipes_db = [
  {
    _id: { $oid: "6520140183900cdec2763079" },
    recipe_id: { $numberInt: "20" },
    recipe_name: "Awesome Sausage, Apple and Cranberry Stuffing",
    prep_time: "15 mins",
    cook_time: "15 mins",
    ingredients:
      "3 ¾ cups cubed white bread, 1 ½ cups cubed whole wheat bread, 1 pound ground turkey sausage, 1 cup chopped onion, ¾ cup chopped celery, 2 ½ teaspoons dried sage, 1 ½ teaspoons dried rosemary, ½ teaspoon dried thyme, 1  Golden Delicious apple, cored and chopped, ¾ cup dried cranberries, ⅓ cup minced fresh parsley, 1  cooked turkey liver, finely chopped, ¾ cup turkey stock, 4 tablespoons unsalted butter, melted",
    directions:
      "Preheat the oven to 350 degrees F (175 degrees C)...\nDotdash Meredith Food Studios\n",
    rating: { $numberDouble: "4.8" },
    url: "https://www.allrecipes.com/recipe/13651/awesome-sausage-apple-and-cranberry-stuffing/",
    cuisine_path:
      "Side Dish/Stuffing and Dressing Recipes/Sausage Stuffing and Dressing Recipes",
    nutrition:
      "Total Fat 12g 15%, Saturated Fat 5g 25%, Cholesterol 80mg 27%, Sodium 548mg 24%, Total Carbohydrate 22g 8%, Dietary Fiber 2g 8%, Total Sugars 9g, Protein 13g, Vitamin C 9mg 44%, Calcium 47mg 4%, Iron 3mg 17%, Potassium 268mg 6%",
    img_src:
      "https://www.allrecipes.com/thmb/A16n6yykk6y6ofEi8akwV-6V9Ck=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1x1-PASSANO_ALR0922_Faves_Stuffing_5279-7495521ab45c4b8880373657bedc0db5.jpg",
  },
  {
    _id: { $oid: "6520140183900cdec276306c" },
    recipe_id: { $numberInt: "7" },
    recipe_name: "Old-Fashioned Apple Dumplings",
    tagname: "",
    prep_time: "30 mins",
    cook_time: "1 hrs",
    ingredients:
      "1 recipe pastry for double-crust pie, 6 large Granny Smith apples, peeled and cored, ½ cup butter, ¾ cup brown sugar, 1 teaspoon ground cinnamon, ½ teaspoon ground nutmeg, 3 cups water, 2 cups white sugar, 1 teaspoon vanilla extract",
    directions:
      "Preheat the oven to 400 degrees F (200 degrees C). Butter a 9x13-inch pan.\nRoll pastry into a 24x16-inch rectangle on a lightly floured surface. Cut into six 8-inch squares. Place an apple on each pastry square with the cored opening facing upward. Cut butter into 8 pieces; place 1 piece in the opening of each apple; reserve the remaining butter for sauce.\nDivide brown sugar between apples, poking some inside each cored opening and the rest around the base of each apple. Sprinkle cinnamon and nutmeg over apples.\nUsing slightly wet fingertips, bring one corner of the pastry square up to the top of the apple, then bring the opposite corner to the top and press together. Bring up the two remaining corners, and seal. Slightly pinch the dough at the sides to completely seal in the apple. Repeat with the remaining apples and place in the prepared baking dish.\nCombine water, white sugar, vanilla extract, and reserved butter in a large saucepan. Place over medium heat, and bring to a boil. Reduce the heat to low and simmer until sugar is dissolved, about 5 minutes. Carefully pour the sauce over the dumplings.\nBake in the preheated oven for 50 to 60 minutes. Place each apple dumpling in a dessert bowl, and spoon some of the sauce over the top.",
    rating: { $numberDouble: "4.7" },
    url: "https://www.allrecipes.com/recipe/46232/old-fashioned-apple-dumplings/",
    cuisine_path: "Desserts/Fruit Desserts/Apple Dessert Recipes",
    nutrition:
      "Total Fat 35g 45%, Saturated Fat 15g 74%, Cholesterol 41mg 14%, Sodium 434mg 19%, Total Carbohydrate 148g 54%, Dietary Fiber 7g 23%, Total Sugars 115g, Protein 5g, Vitamin C 11mg 53%, Calcium 52mg 4%, Iron 2mg 13%, Potassium 319mg 7%",
    img_src:
      "https://www.allrecipes.com/thmb/fBK5I_LpF7CXGzZUJfHTtRnhCac=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9411399-215b5cd7d43e451baeadd6ce77e36c6e.jpg",
    user_contribution: "",
    tags: ["Desserts", "Fruit Desserts", "Apple Dessert Recipes"],
    nutritions: [
      "Total Fat 35g 45%",
      "Saturated Fat 15g 74%",
      "Cholesterol 41mg 14%",
      "Sodium 434mg 19%",
      "Total Carbohydrate 148g 54%",
      "Dietary Fiber 7g 23%",
      "Total Sugars 115g",
      "Protein 5g",
      "Vitamin C 11mg 53%",
      "Calcium 52mg 4%",
      "Iron 2mg 13%",
      "Potassium 319mg 7%",
    ],
    author: "",
  },
  {
    _id: { $oid: "6520140183900cdec276306a" },
    recipe_id: { $numberInt: "5" },
    recipe_name: "Easy Apple Cider",
    tagname: "",
    prep_time: "10 mins",
    cook_time: "1 hrs",
    ingredients:
      "1 (64 fluid ounce) bottle apple cider, 3  cinnamon sticks, 1 teaspoon whole allspice, 1 teaspoon whole cloves, ⅓ cup brown sugar",
    directions:
      "Combine apple cider and cinnamon sticks in a slow cooker.\nPlace allspice and cloves onto the center of an 8-inch square piece of cheesecloth. Gather edges of the cheesecloth together and tie to secure; place in the slow cooker. Stir in brown sugar. Cook on High until it comes to a boil. Reduce heat to Low and keep warm.",
    rating: { $numberDouble: "4.6" },
    url: "https://www.allrecipes.com/recipe/42022/easy-apple-cider/",
    cuisine_path: "Drinks Recipes/Cider Recipes",
    nutrition:
      "Total Fat 0g 0%, Sodium 31mg 1%, Total Carbohydrate 43g 16%, Dietary Fiber 1g 3%, Total Sugars 38g, Protein 0g, Vitamin C 0mg 1%, Calcium 23mg 2%, Iron 0mg 1%, Potassium 20mg 0%",
    img_src:
      "https://www.allrecipes.com/thmb/fRJDPqthkB2mxnA5VOrG6szvS1Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/158643-2d01a5a0827c44598c89b3bd819d250e.jpg",
    user_contribution: "",
    tags: ["Drinks Recipes", "Cider Recipes"],
    nutritions: [
      "Total Fat 0g 0%",
      "Sodium 31mg 1%",
      "Total Carbohydrate 43g 16%",
      "Dietary Fiber 1g 3%",
      "Total Sugars 38g",
      "Protein 0g",
      "Vitamin C 0mg 1%",
      "Calcium 23mg 2%",
      "Iron 0mg 1%",
      "Potassium 20mg 0%",
    ],
    author: "",
  },
  {
    _id: { $oid: "6520140183900cdec27630b0" },
    recipe_id: { $numberInt: "75" },
    recipe_name: "Sauteed Apples",
    tagname: "",
    prep_time: "5 mins",
    cook_time: "15 mins",
    ingredients:
      "¼ cup butter, 4 large tart apples - peeled, cored and sliced 1/4 inch thick, ½ cup cold water, 2 teaspoons cornstarch, ½ cup brown sugar, ½ teaspoon ground cinnamon",
    directions:
      "Melt butter in a large skillet or saucepan over medium heat; add apples and cook, stirring constantly, until almost tender, 6 to 7 minutes.\nMix water and cornstarch together in a small bowl until cornstarch is dissolved; pour over apples. Stir in brown sugar and cinnamon. Bring to a boil for 2 minutes, stirring occasionally. Remove from heat and serve warm.\n\n\n\n\n\n\n\n\n\n\n\ndotdash meredith food studios\n",
    rating: { $numberDouble: "4.8" },
    url: "https://www.allrecipes.com/recipe/21672/sauteed-apples/",
    cuisine_path: "Side Dish",
    nutrition:
      "Total Fat 6g 8%, Saturated Fat 4g 19%, Cholesterol 15mg 5%, Sodium 45mg 2%, Total Carbohydrate 24g 9%, Dietary Fiber 3g 9%, Total Sugars 20g, Protein 0g, Vitamin C 5mg 25%, Calcium 18mg 1%, Iron 0mg 1%, Potassium 128mg 3%",
    img_src:
      "https://www.allrecipes.com/thmb/pTjoToZum_x5Ki9khNk_SSe7MEs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21672-SauteedApples-ddmfs-1X1-0061-fe2952cf8a6148959bd0076742996deb.jpg",
    user_contribution: "",
    tags: ["Side Dish"],
    nutritions: [
      "Total Fat 6g 8%",
      "Saturated Fat 4g 19%",
      "Cholesterol 15mg 5%",
      "Sodium 45mg 2%",
      "Total Carbohydrate 24g 9%",
      "Dietary Fiber 3g 9%",
      "Total Sugars 20g",
      "Protein 0g",
      "Vitamin C 5mg 25%",
      "Calcium 18mg 1%",
      "Iron 0mg 1%",
      "Potassium 128mg 3%",
    ],
    author: "",
  },
  {
    _id: { $oid: "6520140183900cdec27630bd" },
    recipe_id: { $numberInt: "88" },
    recipe_name: "Easy Apple Crisp with Pie Filling",
    tagname: "",
    prep_time: "10 mins",
    cook_time: "20 mins",
    ingredients:
      "1 (21 ounce) can apple pie filling, ½ teaspoon ground cinnamon, ½ teaspoon ground nutmeg, 1 cup margarine, ¼ cup brown sugar, 2 cups all-purpose flour",
    directions:
      "Preheat the oven to 350 degrees F (175 degrees C).\nSpread pie filling in an 8x8-inch baking dish. Sprinkle with cinnamon and nutmeg.\nCream together margarine and sugar. Cut in flour with a pastry blender until the mixture resembles coarse crumbs. Sprinkle mixture over pie filling.\nBake in the preheated oven until the topping is brown and crisp and the filling is hot and bubbly, about 20 minutes.",
    rating: { $numberDouble: "3.5" },
    url: "https://www.allrecipes.com/recipe/22917/easy-apple-crisp-with-pie-filling/",
    cuisine_path:
      "Desserts/Crisps and Crumbles Recipes/Apple Crisps and Crumbles Recipes",
    nutrition:
      "Total Fat 31g 39%, Saturated Fat 5g 27%, Sodium 398mg 17%, Total Carbohydrate 67g 25%, Dietary Fiber 2g 8%, Total Sugars 9g, Protein 5g, Vitamin C 1mg 6%, Calcium 31mg 2%, Iron 2mg 13%, Potassium 119mg 3%",
    img_src:
      "https://www.allrecipes.com/thmb/bQ7QL-XFrgBwNMsa43zSyaX_xmM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7813774-acbbc3ca7c0f4caaa24f2d4c07b7b83f.jpg",
    user_contribution: "",
    tags: [
      "Desserts",
      "Crisps and Crumbles Recipes",
      "Apple Crisps and Crumbles Recipes",
    ],
    nutritions: [
      "Total Fat 31g 39%",
      "Saturated Fat 5g 27%",
      "Sodium 398mg 17%",
      "Total Carbohydrate 67g 25%",
      "Dietary Fiber 2g 8%",
      "Total Sugars 9g",
      "Protein 5g",
      "Vitamin C 1mg 6%",
      "Calcium 31mg 2%",
      "Iron 2mg 13%",
      "Potassium 119mg 3%",
    ],
    author: "",
  },
];

const RecipeRankItem = ({ recipe }) => {
  return (
    <div className="recipe-rank-item bg-white rounded-lg shadow overflow-hidden transform transition duration-500 hover:scale-105">
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
            <span className="font-bold">{recipe.rating.$numberDouble}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecipeRanking = ({ recipes: initialRecipes = recipes_db }) => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("rating");

  const convertTimeToNumber = (timeString) => {
    const match = timeString.match(/(\d+)\s*(mins|hrs)/);
    if (match) {
      const value = parseInt(match[1], 10);
      const unit = match[2];
      return unit === "mins" ? value : value * 60;
    }
    return 0;
  };

  const sortRecipes = () => {
    return [...recipes].sort((a, b) => {
      if (sortBy === "rating") {
        return sortOrder === "asc"
          ? a.rating.$numberDouble - b.rating.$numberDouble
          : b.rating.$numberDouble - a.rating.$numberDouble;
      } else if (sortBy === "cookTime") {
        const timeA = convertTimeToNumber(a.cook_time);
        const timeB = convertTimeToNumber(b.cook_time);
        return sortOrder === "asc" ? timeA - timeB : timeB - timeA;
      }
      return 0;
    });
  };

  useEffect(() => {
    const sortedRecipes = sortRecipes();
    setRecipes(sortedRecipes);

    console.log("Updated recipes_db:", sortedRecipes);
  }, [recipes, sortOrder]);

  const handleSortByRating = () => {
    setSortOrder("desc");
    setSortBy("rating");
  };

  const handleSortByCookTime = () => {
    setSortOrder("asc");
    setSortBy("cookTime");
  };

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
          <RecipeRankItem key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeRanking;
