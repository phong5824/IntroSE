import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menuIcon from "/src/assets/menu.png";


const Menu = () => {
    const [isPageMenuVisible, setPageMenuVisible] = useState(false);
    const navigate = useNavigate();

    const togglePageMenu = () => {
        setPageMenuVisible(prevState => !prevState);
    };

    return (
        <div className="page-menu-actions relative ml-4">
            <img
                src={menuIcon}
                alt="Menu"
                onClick={togglePageMenu}
                className="w-6 h-6 cursor-pointer transition duration-300 ease-in-out bg-white"  // chỉnh sửa ở đây
            />


            {isPageMenuVisible && (
                <div className="page-menu absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10 transition duration-300">
                    <button onClick={() => navigate('/about-us')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">About Us</button>
                    <button onClick={() => navigate('/tips-and-tricks')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">Tips and Tricks</button>
                    <button onClick={() => navigate('/blog')} className="block w-full px-4 py-2 text-left hover:bg-gray-100">Blog</button>
                </div>
            )}
        </div>
    );
}

export default Menu;
