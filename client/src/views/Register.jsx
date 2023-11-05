import { useState } from "react";
import { handleRegister } from "../action/accountAction";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logo-recipe.png';

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
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    if (handleRegister(userData)) {
      navigate("/login");
    }
  };

  const containerStyle = {
    backgroundColor: "#7CFFC0",
    width: "500px",
    height: "500px",
    borderRadius: "20px",
  };

  const labelStyle = {
    backgroundColor: "#7CFFC0",
    fontFamily: 'Poppins, sans-serif',
    color: "black",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "left",
    padding: "10px 20px",
    margin: "0 auto",
  };

  const buttonStyle = {
    backgroundColor: "#FFADB7",
    fontFamily: 'Poppins, sans-serif',
    color: "black",
    fontSize: "15px",
    textAlign: "center",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    margin: "0 auto",
  };

  const pageStyle = {
    backgroundColor: "#7CFF99",
  };

  return (
    <div style={pageStyle} className="flex items-center justify-center h-screen">
      <div className="login-container flex relative flex-col items-center justify-around" style={containerStyle}>
        <div
          className="login-logo w-24 h-24 rounded-full mb-[-4rem]"
          style={{
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="login-form w-[350px] py-1">
          <form className="flex flex-col justify-around w-full" onSubmit={onSubmit}>
            <div style={labelStyle}>Tên người dùng</div>
            <input
              type="text"
              name="ten nguoi dung"
              // onChange={(e) => {
              // }}
              className="border px-3 py-2 rounded-5 focus:outline-none focus:ring-2 focus:ring-cyan-300 w-[100%] bg-white text-center"
              placeholder="Nhập ở đây..."
            />
            <div style={labelStyle}>Địa chỉ email</div>
            <input
              type="text"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border px-3 py-2 rounded-5 focus:outline-none focus:ring-2 focus:ring-cyan-300 w-[100%] bg-white text-center"
              placeholder="Nhập ở đây..."
            />
            <div style={labelStyle}>Mật khẩu</div>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border px-3 py-2 rounded-5 focus:outline-none focus:ring-2 focus:ring-cyan-300 w-full text-center"
              placeholder="Nhập ở đây..."
            />
            <button className="btn w-[50%] py-2 rounded-md mt-4" style={buttonStyle}>
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
