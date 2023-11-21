// import PropTypes from "prop-types";
// import NavBar from "../components/modules/Navbar";
// import Footer from "../components/modules/Footer";
// import slide_2 from "../assets/slide_2.png";

// const recipeMock = {
//   id: 1,
//   title: "Bún riêu cua",
//   imageUrl: slide_2,
//   ingredients: [
//     "Cua",
//     "Bún",
//     "Rau sống",
//     "Gia vị 1",
//     "Gia vị 2",
//     "Gia vị 3",
//     "Gia vị 4",
//     "Gia vị 5",
//     "Gia vị 6",
//     "Gia vị 7",
//     "Gia vị 8",
//     "Gia vị 9",
//     "Gia vị 10",
//     // ... Add more ingredients
//   ],
//   prepTime: "30 minutes",
//   cookingInstructions: `
//       1. Nấu bún và hấp cua.
//       2. Chuẩn bị rau sống và các gia vị.
//       3. Trình bày bún, cua, rau sống và gia vị lên đĩa.
//       4. Thưởng thức ăn kèm theo nước mắm pha chua ngọt.
//     `,
//   totalTime: "1 hour",
//   comments: [
//     { user: "User1", comment: "Ngọt ngào và thơm phức!" },
//     { user: "User2", comment: "Rất ngon, tôi thích!" },
//     { user: "User3", comment: "Sốt cua thêm rất ngon!" },
//     {
//       user: "User4",
//       comment: "Có thể thêm thêm gia vị để hương vị phong phú hơn.",
//     },
//     // ... Add more comments
//   ],
//   rating: 4.5,
// };

// const RecipeDetail = () => {
//   const {
//     title,
//     imageUrl,
//     ingredients,
//     prepTime,
//     totalTime,
//     cookingInstructions,
//     comments,
//   } = recipeMock;

//   return (
//     <div className="home-wrapper min-h-screen flex flex-col overflow-y-auto">
//       <NavBar />

//       <div className="container mx-auto p-8 border rounded-lg shadow-lg">
//         <div className="text-center">
//           {" "}
//           {/* Added text-center class */}
//           <h1 className="text-3xl font-bold mb-4">{title}</h1>
//           <img
//             src={imageUrl}
//             alt={title}
//             className="mb-4 rounded-lg mx-auto"
//           />{" "}
//           {/* Added mx-auto class */}
//         </div>

//         <div className="flex mb-4 space-x-2">
//           <div className="w-4/5 pr-8 bg-green-200 rounded-md">
//             <h2 className="ml-2 text-xl font-bold mb-2">Ingredients</h2>
//             <ul className="ml-4 list-disc list-inside">
//               {ingredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="w-1/5 grid grid-cols-1/4 bg-yellow-400 rounded-md">
//             <button className=" text-white p-2 rounded-md">Save Recipe</button>
//             <button className=" text-white p-2 rounded-md">Share</button>
//           </div>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-xl font-bold mb-2">Preparation Time</h2>
//           <p>{prepTime}</p>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-xl font-bold mb-2">Total Time</h2>
//           <p>{totalTime}</p>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-xl font-bold mb-2">Instructions</h2>
//           <p>{cookingInstructions}</p>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-xl font-bold mb-2">Comments</h2>
//           {comments.map((comment, index) => (
//             <div key={index} className="mb-2">
//               <p className="font-bold">{comment.user}</p>
//               <p>{comment.comment}</p>
//               {comment.rating && (
//                 <p className="text-yellow-400">{`Rating: ${comment.rating}/5`}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// RecipeDetail.propTypes = {
//   recipeMock: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
//     prepTime: PropTypes.string.isRequired,
//     totalTime: PropTypes.string.isRequired,
//     cookingInstructions: PropTypes.string.isRequired,
//     comments: PropTypes.arrayOf(
//       PropTypes.shape({
//         user: PropTypes.string.isRequired,
//         comment: PropTypes.string.isRequired,
//         rating: PropTypes.number,
//       })
//     ).isRequired,
//   }).isRequired,
// };

// export default RecipeDetail;

import React from "react";
import NavBar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import { useParams } from "react-router-dom";

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

const findRecipeById = (recipes, recipeId) => {
  return recipes.find((recipe) => recipe.recipe_id.$numberInt === recipeId);
};

const RecipeDetail = () => {
  const { recipeId } = useParams();

  const foundRecipe = findRecipeById(recipes_db, recipeId);

  if (foundRecipe) {
    console.log("Found recipe:", foundRecipe.recipe_name);
  } else {
    console.log("Recipe not found");
  }

  return (
    <div className="home-wrapper min-h-screen flex flex-col overflow-y-auto">
      <NavBar />

      <div className="container mx-auto p-8 border rounded-lg shadow-lg">
        <div className="text-center">
          {" "}
          {/* Added text-center class */}
          <h1 className="text-3xl font-bold mb-4">{foundRecipe.recipe_name}</h1>
          <img
            src={foundRecipe.img_src}
            alt={foundRecipe.recipe_name}
            className="mb-4 rounded-lg mx-auto max-w-md"
          />{" "}
          {/* Added mx-auto class */}
        </div>

        <div className="flex mb-4 space-x-2">
          <div className="w-4/5 pr-8 bg-green-200 rounded-md py-2">
            <h2 className="ml-2 text-xl font-bold mb-2">Ingredients</h2>
            <ul className="ml-4 list-disc list-inside">
              {foundRecipe.ingredients.split(",").map((ingredient, index) => (
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
          <p>{foundRecipe.prep_time}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Cool Time</h2>
          <p>{foundRecipe.cook_time}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Instructions</h2>
          <ol className="prose prose-blue list-decimal list-inside">
            {foundRecipe.directions.split("\n").map((step, index) => (
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
};

export default RecipeDetail;
