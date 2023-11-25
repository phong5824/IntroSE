import HeroSection from "../components/modules/HeroSection";
import NavBar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import Chat from "./Chat";
import RecommendedRecipes from "../components/modules/RecommendedRecipes";
import RecipeRanking from "../components/modules/RecipeRanking";
import { useContext, useEffect, useState } from "react";
// import accountContext from "../context/accountContext";
import { handleGetUser } from "../action/accountAction";
import { IsLoggedInContext } from "../context/IsLoggedInContext";
import Loading from "../components/modules/Loading";

const Home = () => {
  const isLoggedIn = useContext(IsLoggedInContext);
  const [user, setUser] = useState(null);

  // this useEffect is triggerd when isLoggedIn changes
  // first Home was rendered, isLoggedIn is false
  // then App is rendered, isLoggedIn is true
  // then Home is re-rendered, isLoggedIn is true
  useEffect(() => {
    if (!isLoggedIn) {
      console.log("Not logged in");
      return;
    }
    const fetchUser = async () => {
      const currentUser = await handleGetUser();
      setUser(currentUser);
    };

    fetchUser();

    // console.log(isLoggedIn);
    // console.log(user);
  }, [isLoggedIn]);

  if (isLoggedIn && !user) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <Loading />;
      </div>
    );
  }

  console.log(user);

  const ButtonGroup = () => {
    return (
      <div className="button-group flex flex-rows items-center justify-between w-full p-4 space-x-20 text-gray-800 ">
        <button
          onClick={() => {
            /* Logic for "Đăng công thức" */
          }}
          className="btn w-1/4 bg-green-500 hover:bg-green-300 px-4 py-2.5 rounded-full"
        >
          Đăng công thức
        </button>
        <button
          onClick={() => {
            /* Logic for "Tổ chức bữa ăn" */
          }}
          className="btn w-1/4 bg-green-500 hover:bg-green-300 px-4 py-2.5 rounded-full"
        >
          Tổ chức bữa ăn
        </button>
        <button
          onClick={() => {
            /* Logic for "Tip và tricks" */
          }}
          className="btn w-1/4 bg-green-500 hover:bg-green-300 px-4 py-2.5 rounded-full"
        >
          Tip và tricks
        </button>
        <button
          onClick={() => {
            /* Logic for "Blog" */
          }}
          className="btn w-1/4 bg-green-500 hover:bg-green-300 px-4 py-2.5 rounded-full"
        >
          Blog
        </button>
      </div>
    );
  };

  return (
    <div className="home-wrapper h-screen overflow-y-auto">
      <NavBar />
      <HeroSection />
      <ButtonGroup />
      <RecommendedRecipes />
      <RecipeRanking />
      <Footer />
      <Chat />
    </div>
  );
};

export default Home;
