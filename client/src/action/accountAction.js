import axios from "axios";
import { message } from "antd";
import {
  auth,
  googleprovider,
} from "../components/Firebase/firebase.initialize";
import { signInWithPopup } from "firebase/auth";
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

//Reset Password
export const handleResetPassword = async (userData) => {
  try {
    const result = await axios.put(
      "http://127.0.0.1:8000/api/resetPassword",
      userData
    );
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

// // login with google
// export const handleLoginWithGoogle = async (userData) => {
//   await axios
//     .post("http://127.0.0.1:8000/api/login/google", userData)
//     .then((result) => {
//       if (result.data.success == true) {
//         message.success("Login successful!");
//         return true;
//       } else {
//         message.error(result.data.error);
//       }
//     })
//     .catch((err) => console.log(err));
//   return false;
// };

export const handleLoginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleprovider);
    console.log(result);
    const { displayName, email, metadata, photoURL } = result.user;
    const loggedInUser = {
      name: displayName,
      email: email,
      image: photoURL,
      lastLoginTime: metadata.lastSignInTime,
    };
    localStorage.setItem(`google-user`, JSON.stringify(loggedInUser));
    console.log("user: ", loggedInUser);

    return true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    // The email of the user's account used.
    const errorCollection = {
      errorCode,
      errorMessage,
    };
    setError(errorCollection);
    return false;
  }
};
