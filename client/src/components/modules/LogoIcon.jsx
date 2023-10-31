import logoImage from "/src/assets/logo-recipe.png";

const LogoIcon = () => {
    return (
        <div className="flex items-center space-x-2 bg-green-500"> {/* Wrapper mới */}
            <div className="w-14 h-14 rounded-full overflow-hidden bg-green-500">
                <img src={logoImage} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg font-bold text-white bg-green-500">Love Cook</span>
        </div>
    );
}

export default LogoIcon;
