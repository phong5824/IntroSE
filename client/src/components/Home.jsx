import slide_1 from '../assets/slide_1.png';
import slide_2 from '../assets/slide_2.png';
import slide_3 from '../assets/slide_3.png';
import ImageSlider from "./modules/ImageSlider";
import NavBar from "./modules/Navbar";
import RecommendedRecipes from './modules/RecommendedRecipes';


const Home = () => {

  const images = [
    { src: slide_1 },
    { src: slide_2 },
    { src: slide_3 }
  ];


  const ButtonGroup = () => {
    return (
      <div className="button-group flex justify-between w-full p-4">
        <button onClick={() => {/* Logic for "Đăng công thức" */ }} className="btn bg-green-500 hover:bg-green-300 text-white px-4 py-2 rounded">Đăng công thức</button>
        <button onClick={() => {/* Logic for "Tổ chức bữa ăn" */ }} className="btn bg-green-500 hover:bg-green-300 text-white px-4 py-2 rounded">Tổ chức bữa ăn</button>
        <button onClick={() => {/* Logic for "Tip và tricks" */ }} className="btn bg-green-500 hover:bg-green-300 text-white px-4 py-2 rounded">Tip và tricks</button>
        <button onClick={() => {/* Logic for "Blog" */ }} className="btn bg-green-500 hover:bg-green-300 text-white px-4 py-2 rounded">Blog</button>
      </div>
    );
  }


  return (
    <div className="home-wrapper h-screen overflow-y-auto">
      <NavBar />
      <ImageSlider images={images} />
      <ButtonGroup />
      <ImageSlider images={images} />
      <RecommendedRecipes />

    </div>
  );
};

export default Home;
