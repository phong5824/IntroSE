import PropTypes from 'prop-types';
import NavBar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import slide_2 from '../assets/slide_2.png';
const recipeMock = {
    id: 1,
    title: "Bún riêu cua",
    imageUrl: slide_2,
    ingredients: [
        "Cua",
        "Bún",
        "Rau sống",
        "Gia vị 1",
        "Gia vị 2",
        "Gia vị 3",
        "Gia vị 4",
        "Gia vị 5",
        "Gia vị 6",
        "Gia vị 7",
        "Gia vị 8",
        "Gia vị 9",
        "Gia vị 10",
        // ... Add more ingredients
    ],
    prepTime: "30 minutes",
    cookingInstructions: `
      1. Nấu bún và hấp cua.
      2. Chuẩn bị rau sống và các gia vị.
      3. Trình bày bún, cua, rau sống và gia vị lên đĩa.
      4. Thưởng thức ăn kèm theo nước mắm pha chua ngọt.
    `,
    totalTime: "1 hour",
    comments: [
        { user: "User1", comment: "Ngọt ngào và thơm phức!" },
        { user: "User2", comment: "Rất ngon, tôi thích!" },
        { user: "User3", comment: "Sốt cua thêm rất ngon!" },
        { user: "User4", comment: "Có thể thêm thêm gia vị để hương vị phong phú hơn." },
        // ... Add more comments
    ],
    rating: 4.5,
};


const RecipeDetail = () => {
    const { title, imageUrl, ingredients, prepTime, totalTime, cookingInstructions, comments } = recipeMock;

    return (
        <div className="home-wrapper min-h-screen flex flex-col overflow-y-auto">
            <NavBar />

            <div className="container mx-auto p-8 border rounded-lg shadow-lg">
                <div className="text-center"> {/* Added text-center class */}
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    <img src={imageUrl} alt={title} className="mb-4 rounded-lg mx-auto" /> {/* Added mx-auto class */}
                </div>


                <div className="flex mb-4 space-x-2">
                    <div className="w-4/5 pr-8 bg-green-200 rounded-md">
                        <h2 className="ml-2 text-xl font-bold mb-2">Ingredients</h2>
                        <ul className="ml-4 list-disc list-inside">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
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
                    <p>{prepTime}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Total Time</h2>
                    <p>{totalTime}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Instructions</h2>
                    <p>{cookingInstructions}</p>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Comments</h2>
                    {comments.map((comment, index) => (
                        <div key={index} className="mb-2">
                            <p className="font-bold">{comment.user}</p>
                            <p>{comment.comment}</p>
                            {comment.rating && <p className="text-yellow-400">{`Rating: ${comment.rating}/5`}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

RecipeDetail.propTypes = {
    recipeMock: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        prepTime: PropTypes.string.isRequired,
        totalTime: PropTypes.string.isRequired,
        cookingInstructions: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                user: PropTypes.string.isRequired,
                comment: PropTypes.string.isRequired,
                rating: PropTypes.number,
            })
        ).isRequired,
    }).isRequired,
};

export default RecipeDetail;
