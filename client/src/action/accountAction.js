import axios from "axios";
//Login
export const handleLogin = async (userData) => {
  try {
    const result = await axios.post("http://127.0.0.1:8000/login", userData);

    if (result.data.success === true) {
      alert("Login successful!");
      localStorage.setItem('accessToken', result.data.accessToken);
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

//Reset Password
export const handleResetPassword = async (userData) => {
  try {
   
    const result = await axios.put("http://127.0.0.1:8000/resetPassword", userData);
    if (result.data.success == true) {
      alert("Reset password successful!");
      return true;
      
    } else {
      alert(result.data.error);
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};

// Get user
export const handleGetUser = async () => {
  try {
    const accessToken = await localStorage.getItem('accessToken');

    let result = await axios.get("http://127.0.0.1:8000/users/profile",{ headers: {
      Authorization: 'Bearer ' + accessToken
    }});

    if (result.data.success == true) {
      console.log(result.data.user);
      return result.data.user;
    } else {
      alert(result.data.error);
    }
  }
  catch (err) {
    console.log(err);
  }
  return false;
};

