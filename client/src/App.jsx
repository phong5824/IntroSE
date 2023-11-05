import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import About_us from "./components/About-us";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
