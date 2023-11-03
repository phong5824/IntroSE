import { useState } from "react";
import { handleRegister } from "../action/accountAction";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    if (email === "" || password === "") {
      message.warning("Please fill in all fields");
      return;
    }
    if (handleRegister(userData)) {
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="login-container flex relative flex-col items-center justify-around w-[400px] h-[390px] bg-green-200 border border-blue-700 rounded-lg shadow-lg">
        <div
          className="login-logo w-10 h-10 rounded-full bg-cyan-300"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="login-form w-[300px]">
          <form
            className="flex flex-col justify-around w-full"
            onSubmit={onSubmit}
          >
            <label
              htmlFor="email"
              className="text-blue-700 mb-1 w-full font-bold"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border border-orange-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300 w-full mb-3"
              style={{ backgroundColor: "lightblue" }}
            />
            <label htmlFor="password" className="text-blue-700 mb-1 font-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border border-orange-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-300 w-full mb-3
          font-bold 
          "
              style={{ backgroundColor: "lightblue" }}
            />
            <button
              type="submit"
              className="btn bg-gray-900 w-full text-white py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
