import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About_us from "./views/About-us";
import Blog from "./views/Blog";
import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import Profile from "./views/Profile";
import ResetPassword from "./views/resetPassword";
import Others from "./views/Others";
import RecipeDetail from "./views/RecipeDetail";


function App() {
  // const [count, setCount] = useState(0);


  return (
    <div className="h-screen w-screen overflow-auto">
      <BrowserRouter>
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

          <Route path="/details" element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
