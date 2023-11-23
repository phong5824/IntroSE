import  { useEffect, useState} from "react";
import starIcon from "/src/assets/star.png";
import { handleRecommendedRecipes } from "../../action/recipesAction";

const initialRecipesToShow = 10;
let list_recipes = [];

const RecommendRecipe = () => {
    const [recipesToShow, setRecipesToShow] = useState(initialRecipesToShow);

    useEffect(() => {
        const fetchRecommendedRecipes = async () => {
          list_recipes = await handleRecommendedRecipes();
         
        };
            fetchRecommendedRecipes();
        }, []);
    
   

    let recipes = list_recipes.slice(0,recipesToShow);

    const handleLoadMore = () => {
        setRecipesToShow(20); // Show all recipes
        recipes = list_recipes.slice(0, 20);
    };

    const handleShowLess = () => {
        recipes = list_recipes.slice(0, 10);
        setRecipesToShow(10); // Show initial number of recipes
    };

   
    return (
        <div className="container border-t mx-auto px-4 py-7" >
            <h2 className="text-2xl font-bold mb-6">Một số món ăn gợi ý</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                {recipes.map((recipe, index) => (
                    <div key={index} className="bg-white rounded-lg shadow overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src={recipe.img_src} alt={recipe.recipe_name} className="w-full h-52 object-cover round-lg" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg">{recipe.recipe_name}</h3>
                            <p className="text-gray-700">{recipe.cook_time}</p>
                            <div className="flex items-center justify-between mt-3">
                                <div>
                                    {/* Placeholder for icons and other details */}
                                </div>
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
                    <button onClick={handleShowLess} className="bg-green-500 text-white px-6 py-2 rounded-full">
                        Rút gọn
                    </button>
                ) : (
                    <button onClick={handleLoadMore} className="bg-green-500 text-white px-6 py-2 rounded-full">
                        Xem thêm món ăn gợi ý
                    </button>
                )}

            </div>

        </div>
    );
};

export default RecommendRecipe;
