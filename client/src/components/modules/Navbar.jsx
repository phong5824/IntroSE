import SearchBar from "./searchBar";
import LogoIcon from "./LogoIcon";
import Avatar from "./Avatar";
import Menu from "./Menu";
const NavBar = () => {
    return (
        <nav className="navbar flex relative items-center justify-between px-6 h-[80px] bg-green-500">
            <LogoIcon className="flex-shrink-0" />

            <SearchBar className="flex-grow mx-2" />

            <div className="flex-shrink-0 flex items-center space-x-6 bg-green-500">
                <Avatar />
                <Menu />
            </div>
        </nav>
    );
};


export default NavBar;
