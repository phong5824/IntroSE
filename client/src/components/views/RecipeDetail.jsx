/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from '../modules/Navbar.jsx';
import Footer from "../modules/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { handleSearchRecipesID } from "../../action/recipesAction";
import Loading from "../modules/Loading";
import Clock from "/src/assets/clock.png";
import chatIcon from "/src/assets/chat.png";
import avatarIcon from "/src/assets/avatar.png";
import SendIcon from '/src/assets/send.png';
import Bookmark from "/src/assets/bookmark.png";
import Share from "/src/assets/share.png";
import "./Profile.css";
import axios from "axios";
import { message } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarRatings from 'react-star-ratings';

export const RecipeDetail = () => {

  const comments = [
    {
      user: "Cô Ba",
      comment: "Ngon vãi luôn ý, chồng em ăn cứ tấm tắt khen ngon mấy chị ơi 💕🌞⚘❣👏",
      rating: 5,
    },
    {
      user: "Anh đẹp trai",
      comment: "Vừa nấu món này cho cô người yêu ăn, cổ khen quá trời, cảm ơn sốp đã chia sẻ công thức nhiều nhen  🥰🥰💖💖🙌🏻",
      rating: 4,
    },
    {
      user: "Chị Tư bán hủ tiếu",
      comment: "Ê ngon thiệt bây ơi, tao ăn còn ghiền nữa nói chi mấy đứa nhỏ, riết tụi nó kêu tao bỏ bán hủ tiếu chuyển qua bán cái này không đó",
      rating: 4.5,
    },
    {
      user: "Ông năm khó tính",
      comment: "Tạm, khẩu vị của tôi cần gì đó đặc biệt hơn thế này, nói chung là vậy.",
      rating: 2,
    },
    {
      user: "Nói chung là slay",
      comment: "Xin lỗi chị, xin lỗi mọi người,... em lại như vậy nữa rồi... Em lại nấu ngon nữa rồi!!! Ngon vaicut mấy chị gái ơi 👉👈 kakaka",
      rating: 5,
    },
  ];



  const navigate = useNavigate();
  const location = useLocation();

  const notify = () => {
    toast.success('🦄 Save recipes successfull!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const recipeId = new URLSearchParams(useLocation().search).get("ID");
  const [recipe, setRecipe] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchRecipes = async () => {
    await handleSearchRecipesID(recipeId)
      .then((dataGetRecipe) => {
        setRecipe(dataGetRecipe);
        setLoading(true);
      })
      .catch((err) => {
        setRecipe(null);
      });
  };

  if (recipeId) {
    fetchRecipes();
  }

  // Should return error screen
  if (!loading) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <Loading />;
      </div>
    );
  }


  const handleUpdateFavoriteRecipes = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        message.error("Bạn cần đăng nhập để lưu công thức này.");
        navigate('/login', { state: { from: location } }); // Chuyển hướng người dùng đến trang đăng nhập
        return;
      }

      console.log("accessToken : ", accessToken);
      const result = await axios.post(
        `http://127.0.0.1:8000/users/favourites`,
        { recipeId },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );

      if (result.data.success) {
        console.log(result.data);
        return result.data;
      } else {
        message.error(result.data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home-wrapper min-h-screen bg-green-200 flex flex-col overflow-y-auto">
      <NavBar />

      <div className="container bg-green-200 mx-auto p-8">
        <div className="text-center">
          {/* Added text-center class */}
          <h1 className="text-4xl font-bold mb-4">{recipe.recipe_name}</h1>
          <img
            src={recipe.img_src}
            alt={recipe.recipe_name}
            className="mb-3 rounded-lg mx-auto max-w-md"
          />
          <div className="flex items-center justify-center">
            <div className="mr-2">
              <StarRatings
                rating={recipe.rating}
                starRatedColor="orange"
                numberOfStars={5}
                name='rating'
                starDimension="20px"
                starSpacing="2px"
              />
            </div>
            <span className="text-sm font-bold">{recipe.rating}</span>
          </div>

          {/* Added mx-auto class */}
        </div>

        <div className="flex justify-center mb-4 mt-3">
          <div className="w-3/4 pr-8">

            <div className="w-full bg-white rounded-md ml-20 py-2 shadow-lg">
              <div className="flex items-center mb-2">
                <h2 className="ml-4 text-2xl font-bold">Nguyên liệu</h2>
                <img src={Clock} alt="time" className="h-5 w-5 ml-6 mt-1" />
                <span className="text-gray-700 ml-1 mt-1">
                  {recipe.prep_time}
                </span>
              </div>

              <ul className="ml-8 mt-3 list-inside">
                {recipe.ingredients_list.map((ingredient, index) => (
                  <li key={index} className="mb-2 pb-2">
                    {ingredient.trim()}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full pr-5 bg-white rounded-md ml-20 py-2 mt-4 shadow-lg">
              <div className="flex items-center mb-2">
                <h2 className="ml-4 text-2xl font-bold">Hướng dẫn nấu nướng</h2>
                <img src={Clock} alt="time" className="h-5 w-5 ml-6 mt-1" />
                <span className="text-gray-700 ml-1 mt-1">
                  {recipe.cook_time}
                </span>
              </div>

              <div className="ml-8 mb-2 mt-3">
                <ol className="prose prose-blue list-inside">
                  {recipe.directions.split("\n").map((step, index) => (
                    <li key={index} className="mb-2 pb-2">
                      <span className="font-bold">Bước {index + 1}:</span> {step}
                    </li>
                  ))}
                </ol>
              </div>

            </div>



            <div className="w-3/4 pr-3 bg-white rounded-md ml-20 py-2 mt-4 shadow-lg">
              <div className="flex items-center mb-3">
                <img src={chatIcon} alt="comment" className="h-6 w-6 ml-6" />
                <h2 className="ml-4 text-2xl font-bold">Bình luận</h2>
              </div>
              <div className="ml-8 flex-col items-center">
                {comments.map((comment, index) => (
                  <div key={index} className="mb-2 flex">
                    <img
                      src={avatarIcon}
                      alt="Avatar"
                      className="h-8 w-8 rounded-full mr-3 mt-1"
                    />
                    <div>
                      <p className="font-bold">{comment.user}</p>
                      <p>{comment.comment}</p>
                      {comment.rating && (
                        <p className="text-yellow-600">{`Rating: ${comment.rating}/5`}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="ml-3 flex bg-white p-2 mt-2 mb-1 border border-gray-700 rounded-full">
                <input
                  type="text"
                  // value={inputMessage}
                  // onChange={(e) => setInputMessage(e.target.value)}
                  // onKeyDown={handleKeyDown}
                  placeholder="Thêm bình luận của bạn tại đây nha..."
                  className="flex-1 outline-none border-none ml-2"
                />
                <button
                  // onClick={handleSendMessage}
                  className="text-black rounded-md mr-2"
                >
                  <img src={SendIcon} alt="send" className="h-4 w-4" />
                </button>
              </div>

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

          <div className="w-1/4 h-screen ml-20 flex flex-col justify-start">
            <div className="w-72 grid grid-cols-1/4  bg-white border shadow-black rounded-md p-3 space-y-2 shadow-lg">
              <button
                className="text-gray-900 p-1 rounded-md border border-black flex items-center justify-center space-x-2"
                onClick={() => {
                  handleUpdateFavoriteRecipes();
                  notify();
                }}
              >
                <img src={Bookmark} alt="Bookmark Icon" className="h-4 w-4" />
                <span>Lưu Món</span>
              </button>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />

              <button className="text-gray-900 p-1 rounded-md border border-black bg-white flex items-center justify-center space-x-2">
                <img src={Share} alt="Share Icon" className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>



      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 ml-4">Một số món ăn liên quan</h2>

      </div>

      <Footer />
    </div>
  );
}

export default RecipeDetail;