import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../action/accountAction";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      username: username,
      password: password,
    };
    if (email === "" || username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    if (handleLogin(userData)) {
      navigate("/home");
    }
  };

  return (
    <div className="login-container flex relative flex-col items-center justify-around w-[200px] h-[400px] bg-gray-200 ">
      <div className="login-logo w-5 h-5 bg-cyan-300"></div>
      <div className="login-form">
        <form
          className="flex flex-col justify-around w-full"
          onSubmit={onSubmit}
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="btn bg-gray-900 w-full text-white">
            Login
          </button>
        </form>
      </div>
      <Link to="/register" className="btn">
        Register
      </Link>
    </div>
  );
}
