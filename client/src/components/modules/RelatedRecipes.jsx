import { useEffect, useState } from 'react';
import starIcon from "/src/assets/star.png";
import commentIcon from "/src/assets/chat.png";
import likeIcon from "/src/assets/heart.png";
import Loading from "../modules/Loading";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { handleGetRelatedRecipes } from "../../action/recipesAction";


const RelatedRecipes = ({ recipeId }) => {
    const [relatedRecipes, setRelatedRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRelatedRecipes = async () => {
            try {
                const result = await handleGetRelatedRecipes(recipeId);
                if (result.success) {
                    setRelatedRecipes(result.relatedRecipes);
                    setLoading(true);

                } else {
                    console.error(result.message);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching related recipes:', error.message);
                setLoading(false);
            }
        };

        fetchRelatedRecipes();
    }, [recipeId]);

    if (loading) {
        return (
            <div className="absolute top-1/2 left-1/2">
                <Loading />;
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
            {relatedRecipes.map((recipe, index) => (
                <Link to={`/recipes/?ID=${recipe.recipe_id}`} key={recipe.recipe_id}>
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow overflow-hidden transform transition duration-500 hover:scale-105 h-full"
                    >
                        <img
                            src={recipe.img_src}
                            alt={recipe.recipe_name}
                            className="w-full h-44 object-cover rounded-t-lg"
                        />
                        <div className="p-4 flex flex-col h-full">
                            <h3 className="font-bold text-lg overflow-hidden overflow-ellipsis whitespace-nowrap">
                                {recipe.recipe_name}
                            </h3>
                            <p className="text-gray-700 overflow-hidden overflow-ellipsis whitespace-nowrap">
                                {recipe.cook_time}
                            </p>
                            <div className="flex flex-row items-center justify-between mt-2">
                                <div className="flex items-center">
                                    {/* Like Icon */}
                                    <div className="flex items-center mr-2">
                                        <img src={likeIcon} alt="like" className="h-5 w-5" />
                                    </div>

                                    {/* Comment Icon */}
                                    <div className="flex items-center">
                                        <img src={commentIcon} alt="comment" className="h-5 w-5 mr-2" />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    {/* Star (Rating) Icon */}
                                    <div className="flex items-center">
                                        <img src={starIcon} alt="Star" className="h-5 w-5 mr-2" />
                                        <span className="font-bold">{recipe.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

RelatedRecipes.propTypes = {
    recipeId: PropTypes.string.isRequired,
};

export default RelatedRecipes;



