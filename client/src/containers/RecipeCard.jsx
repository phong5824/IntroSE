import PropTypes from 'prop-types'; // Import thư viện prop-types

const RecipeCard = ({ recipe }) => {
    return (
        <div className="bg-white rounded-lg p-2 shadow-md">
            <img src={recipe.image} alt={recipe.name} className="rounded-t-lg" />
            <div className="p-2">
                <h3 className="text-lg font-semibold">{recipe.name}</h3>
            </div>
        </div>
    );
};

// Xác định kiểu và yêu cầu cho prop 'recipe'
RecipeCard.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default RecipeCard;
