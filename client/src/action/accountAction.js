import axios from "axios";
//Login
export const handleLogin = async (userData) => {
  try {
    const result = await axios.post("http://127.0.0.1:8000/login", userData);

    if (result.data.success === true) {
      alert("Login successful!");
      return result.data.accessToken;
    } else {
      alert(result.data.error);
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

//Register
export const handleRegister = async (userData) => {
  try {
    const result = await axios.post("http://127.0.0.1:8000/register", userData);
    console.log(result);
    if (result.data.success == true) {
      alert("Register successful!");
      return true;
      
    } else {
      alert(result.data.error);
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};

