import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../action/accountAction";
import Logo from '../assets/logo-recipe.png';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    if (email === "" || password === "") {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
     const userId = await handleLogin(userData);
      if (userId) {
        alert("Chuẩn bị điều hướng trang");
        navigate(`/home/${userId}`);
      } else {
        alert("Đã xảy ra lỗi");
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
      <div className="login-container flex relative flex-col items-center justify-around w-[500px] h-[450px]" style={containerStyle}>
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
            <div style={labelStyle}>
              Email
            </div>
            <input
              type="text"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border px-3 py-2 rounded-5 focus:outline-none focus:ring-2 focus:ring-cyan-300 w-[100%] bg-white text-center"
              placeholder="Nhập ở đây..."
            />
            <div style={labelStyle}>
              Mật khẩu
            </div>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border px-3 py-2 rounded-5 focus:outline-none focus:ring-2 focus:ring-cyan-300 w-full text-center"
              placeholder="Nhập ở đây..."
            />
            <button className="btn w-[50%] py-2 rounded-md mt-3" style={buttonStyle} >
              Đăng nhập
            </button>
            <Link to="/register" className="btn text-gray-700 hover:text-gray-900 mt-3" style={{ labelStyle, margin: "0 auto" }}>
              Đăng ký tài khoản
            </Link>
            <Link to="/resetPassword" className="btn text-gray-700 hover:text-gray-900 mt-3" style={{ labelStyle, margin: "0 auto" }}>
              Quên mật khẩu
            </Link>
          </form>
        </div>
      </div>
    </div >
  );
}
