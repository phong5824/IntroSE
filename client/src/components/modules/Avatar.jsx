import { useState } from 'react';
import avatar from "/src/assets/avatar.png";
import { useNavigate } from 'react-router-dom';

const Avatar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };

  const navigateToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="auth-actions relative rounded-full">
      <img src={avatar} alt="Avatar" onClick={toggleMenu} className="w-10 h-10 object-cover rounded-full cursor-pointer transition duration-300 ease-in-out bg-white" />


      {isMenuVisible && (
        <div className="auth-menu absolute left transform -translate-x-1/2 mt-2 w-32 bg-white border border-gray-300 rounded shadow-lg z-10 transition duration-300">
          <button onClick={navigateToLogin} className="block w-full px-4 py-2 text-center hover:bg-gray-100">Đăng nhập</button>
        </div>
      )}
    </div>
  );
}

export default Avatar;
