
import HeroSection from "../components/modules/HeroSection";
import NavBar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer"
import RecommendedRecipes from '../components/modules/RecommendedRecipes';


const Home = () => {



  const ButtonGroup = () => {
    return (
      <div className="button-group flex justify-between w-full p-4 text-gray-800">
        <button onClick={() => {/* Logic for "Đăng công thức" */ }} className="btn bg-green-500 hover:bg-green-300 px-4 py-2 rounded">Đăng công thức</button>
        <button onClick={() => {/* Logic for "Tổ chức bữa ăn" */ }} className="btn bg-green-500 hover:bg-green-300 px-4 py-2 rounded">Tổ chức bữa ăn</button>
        <button onClick={() => {/* Logic for "Tip và tricks" */ }} className="btn bg-green-500 hover:bg-green-300 px-4 py-2 rounded">Tip và tricks</button>
        <button onClick={() => {/* Logic for "Blog" */ }} className="btn bg-green-500 hover:bg-green-300 px-4 py-2 rounded">Blog</button>
      </div>
    );
  }


  return (
    <div className="home-wrapper h-screen overflow-y-auto">
      <NavBar />
      {/* <ImageSlider images={images} /> */}
      <HeroSection />
      <ButtonGroup />
      {/* <ImageSlider images={images} /> */}
      <RecommendedRecipes />
      <Footer />
    </div>
  );
};

export default Home;
