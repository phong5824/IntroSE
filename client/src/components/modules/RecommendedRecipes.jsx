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

export default RecommendedRecipes;
