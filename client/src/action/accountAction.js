import axios from "axios";
import { message } from "antd";

//Login
export const handleLogin = async (userData) => {
  await axios
    .post("http://127.0.0.1:8000/api/login", userData)
    .then((result) => {
      if (result.data.success == true) {
        message.success("Login successful!");
        return true;
      } else {
        message.error(result.data.error);
      }
    })
    .catch((err) => console.log(err));
  return false;
};

//Register
export const handleRegister = async (userData) => {
  await axios
    .post("http://127.0.0.1:8000/api/register", userData)
    .then((result) => {
      if (result.data.success == true) {
        message.success("Register successful!");
        return true;
      } else {
        message.error(result.data.error);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
};

export const handleLoginWithGoogle = async (userData) => {
  await axios
    .post("http://localhost:8000/api/login/google", userData)
    .then((result) => {
      if (result.data.success == true) {
        message.success("Login successful!");
        return true;
      } else {
        message.error(result.data.error);
      }
    })
    .catch((err) => console.log(err));
  return false;
};
