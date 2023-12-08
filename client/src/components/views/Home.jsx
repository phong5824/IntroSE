/* eslint-disable no-unused-vars */
import HeroSection from "../modules/HeroSection";
import NavBar from "../modules/Navbar";
import Footer from "../modules/Footer";
import Chat from "./Chat";
import RecommendedRecipes from "../modules/RecommendedRecipes";
import RecipeRanking from "../modules/RecipeRanking";
import { useContext, useEffect, useState } from "react";
import { handleGetUser } from "../../action/accountAction";
import Loading from "../modules/Loading";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useContext(UserContext);


  const ButtonGroup = () => {
    return (
      <div className="button-group flex flex-cols items-center justify-between w-full p-4 space-x-20">
        <button
          onClick={() => {
            /* Logic for "Đăng công thức" */
          }}
          className="btn w-1/4 bg-green-500 hover:bg-green-300 px-4 py-2.5 rounded-full font-medium"
        >
          Đăng công thức
        </button>
        <button
          onClick={() => {
            /* Logic for "Tổ chức bữa ăn" */
          }}
          className="btn w-1/4 bg-green-500 hover:bg-green-300 px-4 py-2.5 rounded-full font-medium"
        >
          Tổ chức bữa ăn
        </button>
        <button
          onClick={() => {
            /* Logic for "Tip và tricks" */
          }}
          className="btn w-1/4 bg-green-500 hover:bg-green-300 px-4 py-2.5 rounded-full font-medium"
        >
          Tip và tricks
        </button>
        <button
          onClick={() => {
            /* Logic for "Blog" */
          }}
          className="btn w-1/4 bg-green-500 hover:bg-green-300 px-4 py-2.5 rounded-full font-medium"
        >
          <Link to="/blog" className="text-black font-medium">
            Blog
          </Link>
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
