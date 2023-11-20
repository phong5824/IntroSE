<<<<<<< HEAD
import { useState } from 'react';
import RecipeCard from "/src/containers/RecipeCard";

const RecommendedRecipes = () => {
    const [recipes] = useState([
        { id: 1, name: 'Recipe 1', image: 'recipe1.jpg' },
        { id: 2, name: 'Recipe 2', image: 'recipe2.jpg' },
        { id: 3, name: 'Recipe 3', image: 'recipe3.jpg' },
        { id: 4, name: 'Recipe 4', image: 'recipe4.jpg' },
        { id: 5, name: 'Recipe 5', image: 'recipe5.jpg' },
        { id: 6, name: 'Recipe 6', image: 'recipe6.jpg' },
        { id: 7, name: 'Recipe 7', image: 'recipe7.jpg' },
        { id: 8, name: 'Recipe 8', image: 'recipe8.jpg' },
    ]);

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Recommended Recipes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                {isExpanded
                    ? recipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))
                    : recipes.map((recipe, index) => ( // Sử dụng recipes.length để quyết định hiển thị tất cả
                        index < 4 && <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
=======
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
>>>>>>> main
            </div>
            <button
                className="bg-green-500 text-white px-4 py-2 rounded-full mt-4 mx-auto block"
                onClick={toggleExpansion}
            >
                {isExpanded ? 'Rút gọn' : 'Mở rộng'}
            </button>
        </div>
    );
};

export default RecommendRecipe;
