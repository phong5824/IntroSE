import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About_us from "./components/views/About-us";
import Blog from "./components/views/Blog";
import Login from "./components/views/Login";
import Home from "./components/views/Home";
import Register from "./components/views/Register";
import Profile from "./components/views/Profile";
import ResetPassword from "./components/views/resetPassword";
import Others from "./components/views/Others";
import RecipeDetail from "./components/views/RecipeDetail";
import Search from "./components/views/search";
import Admin from "./components/views/Admin";
import { useEffect, useState } from "react";
import { handleGetUser } from "./action/accountAction";
import { UserContext } from "./context/userContext";

// eslint-disable-next-line react/prop-types
const HandleLoginStatus = ({ children }) => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchAccount = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        return;
      }
      setUser(await handleGetUser());
    };
    fetchAccount();
  }, [location]); // Add location to the dependency array

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

function App() {
  // const [accountToken, setAccountToken] = useState(null);
  // useEffect(() => {
  //   const fetchAccount = async () => {
  //     if (localStorage.getItem("accessToken") === null) {
  //       return;
  //     }
  //     const accessToken = localStorage.getItem("accessToken");
  //     setAccountToken(accessToken);
  //   };

  //   fetchAccount();
  // }, []);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   const fetchAccount = async () => {
  //     if (localStorage.getItem("accessToken") === null) {
  //       return;
  //     }
  //     const accessToken = localStorage.getItem("accessToken");
  //     setIsLoggedIn(true);
  //   };

  //   fetchAccount();
  // }, [location]);

  //   return (
  //     // <AccountContext.Provider value={accountToken}>
  //     <IsLoggedInContext.Provider value={isLoggedIn}>
  //       <div className="h-screen w-screen overflow-auto">
  //         <BrowserRouter>
  //           <Routes>
  //             <Route path="/" element={<Home />} />
  //             <Route path="/home" element={<Home />} />
  //             <Route path="/home/:username" element={<Profile />} />
  //             <Route path="/login" element={<Login />} />
  //             <Route path="/register" element={<Register />} />
  //             <Route path="/about-us" element={<About_us />} />
  //             <Route path="/blog" element={<Blog />} />
  //             <Route path="/resetPassword" element={<ResetPassword />} />
  //             <Route path="/users/profile" element={<Profile />} />
  //             <Route path="/others" element={<Others />} />
  //             <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
  //             <Route path="/details" element={<RecipeDetail />} />
  //             <Route path="/search" element={<Search />} />
  //           </Routes>
  //         </BrowserRouter>
  //       </div>
  //     </IsLoggedInContext.Provider>

  //     // {/* </AccountContext.Provider> */}
  //   );
  // }

  return (
    <div className="h-screen w-screen overflow-auto">
      <BrowserRouter>
        <HandleLoginStatus>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:username" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about-us" element={<About_us />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/users/profile" element={<Profile />} />
            <Route path="/others" element={<Others />} />
            <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
            <Route path="/recipes/" element={<RecipeDetail />} />
            <Route path="/details" element={<RecipeDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/users/admin" element={<Admin />} />
          </Routes>
        </HandleLoginStatus>
      </BrowserRouter>
    </div>
  );
}
export default App;
