import avatar from "/src/assets/avatar.png";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { handleGetUser } from "../../action/accountAction";
import { UserContext } from "../../context/userContext";

const Avatar = ({ showLoginForm, setShowLoginForm, onClick }) => {
  const user = useContext(UserContext);
  // this useEffect is
  useEffect(() => {
    if (!user) {
      console.log("Not logged in");
      return;
    }
    // const fetchUser = async () => {
    //   const currentUser = await handleGetUser();
    //   setUser(currentUser);
    // };

    // fetchUser();
  }, [user]);

  const navigate = useNavigate();

  const navigateToLogout = () => {
    // setShowLoginForm(true);
    localStorage.clear();
    navigate("/login");
  };

  const navigateToLogin = () => {
    // setShowLoginForm(true);
    navigate("/login");
  };

  return (
    <div className="auth-actions relative rounded-full">
      <img
        src={avatar}
        alt="Avatar"
        onClick={onClick}
        className="w-10 h-10 object-cover rounded-full cursor-pointer transition duration-300 ease-in-out bg-white"
      />

      {showLoginForm && (
        <div className="auth-menu absolute transform -translate-x-1/2 mt-2 w-32 bg-white text-black border-gray-300 rounded shadow-lg z-10 transition duration-300">
          {user ? (
            <button
              onClick={navigateToLogout}
              className="block w-full px-4 py-2 text-center rounded hover:bg-gray-200"
            >
              Đăng xuất
            </button>
          ) : (
            <button
              onClick={navigateToLogin}
              className="block w-full px-4 py-2 text-center rounded hover:bg-gray-200"
            >
              Đăng nhập
            </button>
          )}
        </div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  showLoginForm: PropTypes.bool.isRequired,
  setShowLoginForm: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Avatar;
