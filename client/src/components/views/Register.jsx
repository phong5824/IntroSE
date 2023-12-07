import { useState } from "react";
import { handleRegister } from "../../action/accountAction";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo-recipe.png";
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
      message.warning("Vui lòng điền đầy đủ thông tin");
      return;
    }
    if (handleRegister(userData)) {
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-400">
      <div className="login-container flex relative flex-col items-center justify-around w-[500px] h-[500px] bg-green-300 rounded-3xl">
        <div
          className="login-logo w-24 h-24 rounded-full mb-[-4rem]"
          style={{
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="login-form w-[350px] py-1">
          <form
            className="flex flex-col justify-around w-full"
            onSubmit={onSubmit}
          >
            <div className="bg-green-300 text-black text-lg font-semibold text-left p-2 px-4 my-1 mx-auto w-[max-content]">
              Tên người dùng
            </div>
            <input
              type="text"
              name="ten nguoi dung"
              // onChange={(e) => {
              // }}
              className="border px-3 py-2 rounded-5 focus:outline-none focus:ring-2 focus:ring-cyan-300 w-[100%] bg-white text-center"
              placeholder="Nhập ở đây..."
            />
            <div className="bg-green-300 text-black text-lg font-semibold text-left p-2 px-4 my-1 mx-auto w-[max-content]">
              Địa chỉ email
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
            <div className="bg-green-300 text-black text-lg font-semibold text-left p-2 px-4 my-1 mx-auto w-[max-content]">
              Mật khẩu
            </div>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border px-3 py-2 rounded-5 focus:outline-none focus:ring-2 focus:ring-cyan-300 w-full text-center"
              placeholder="Mật khẩu chứa ít nhất 6 kí tự và có chữ số"
            />
            <button className="btn w-[50%] py-2 rounded-full mt-4 text-black text-base text-center cursor-pointer mx-auto bg-red-400 hover:bg-red-500 hover:font-semibold hover:shadow-lg transition duration-300">
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
