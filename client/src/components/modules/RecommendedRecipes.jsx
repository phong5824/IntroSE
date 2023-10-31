import logoImage from "/src/assets/logo-recipe.png";


const RecommendedRecipes = () => {
    return (
        <div className="recommended-recipes mt-8">
            <h2 className="text-xl font-bold mb-6 text-center">Recommended Recipes</h2>
            <div className="flex flex-wrap justify-center">
                <img src={logoImage} className="w-20 h-20 object-cover" />
            </div>
            <div className="text-center mt-6">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-full">Load More</button>
            </div>
        </div>
    );
};

export default RecommendedRecipes;
