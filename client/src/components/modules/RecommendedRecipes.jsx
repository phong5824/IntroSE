import { useState } from "react";
import Image1 from "/src/assets/recipe1.png";
import starIcon from "/src/assets/star.png";

// Mock data for recipes
const mockRecipes = Array(20).fill({
    id: '1',
    name: 'Russian Salad',
    duration: '40 min',
    imageUrl: Image1, // Directly use the imported image
    rating: 4.5,
});

const initialRecipesToShow = 10;

const RecommendRecipe = () => {
    const [recipesToShow, setRecipesToShow] = useState(initialRecipesToShow);

    const handleLoadMore = () => {
        setRecipesToShow(mockRecipes.length); // Show all recipes
    };

    const handleShowLess = () => {
        setRecipesToShow(initialRecipesToShow); // Show initial number of recipes
    };

    const recipes = mockRecipes.slice(0, recipesToShow);

    return (
        <div className="container border-t mx-auto px-4 py-7">
            <h2 className="text-2xl font-bold mb-6">Recommended Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                {recipes.map((recipe, index) => (
                    <div key={index} className="bg-white rounded-lg shadow overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src={recipe.imageUrl} alt={recipe.name} className="w-full h-52 object-cover round-lg" />
                        <div className="p-4">
                            <h3 className="font-bold text-lg">{recipe.name}</h3>
                            <p className="text-gray-700">{recipe.duration}</p>
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
                {recipesToShow >= mockRecipes.length ? (
                    <button onClick={handleShowLess} className="bg-green-500 text-white px-6 py-2 rounded-full">
                        Rút gọn
                    </button>
                ) : (
                    <button onClick={handleLoadMore} className="bg-green-500 text-white px-6 py-2 rounded-full">
                        Thêm
                    </button>
                )}

            </div>

        </div>
    );
};

export default RecommendRecipe;
