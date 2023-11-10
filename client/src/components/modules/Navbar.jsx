import { useState } from "react";
import SearchBar from "./searchBar";
import LogoIcon from "./LogoIcon";
import Avatar from "./Avatar";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [setShowLoginForm] = useState(false); // Sửa tên biến thành showLoginForm
  const [setShowMenu] = useState(false); // Sửa tên biến thành showMenu

  const handleAvatarClick = () => {
    setShowLoginForm(true);
    setShowMenu(false);
  };

  const handleMenuClick = () => {
    setShowMenu(true);
    setShowLoginForm(false);
  };

  return (
    <nav className="navbar flex relative items-center justify-between px-6 h-[80px] bg-green-500">
      <Link to="/home">
        <LogoIcon className="flex-shrink-0" />
      </Link>

      <SearchBar className="flex-grow mx-2" />

      <div className="flex-shrink-0 flex items-center space-x-6 bg-green-500">
        <Avatar onClick={handleAvatarClick} />
        <Menu onClick={handleMenuClick} />
      </div>
    </nav>
  );
};

export default NavBar;
