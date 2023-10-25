import React, { useState } from "react";
import { registerUser } from "../action/accountAction";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    if (registerUser(userData)) {
      navigate("/login");
    }
  };

  return (
    <div className="login-container flex relative flex-col items-center justify-around w-[200px] h-[400px] bg-gray-200">
      <div className="login-logo w-5 h-5 bg-cyan-300"></div>
      <div className="login-form">
        <form
          className="flex flex-col justify-around w-full"
          onSubmit={onSubmit}
          // action="/api/account"
          // method="POST"
        >
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
