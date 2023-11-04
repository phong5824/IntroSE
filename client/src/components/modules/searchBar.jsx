import loupe from "/src/assets/loupe.png";
const SearchBar = () => {
    const handleSearch = () => {
        // Hành động tìm kiếm của bạn sẽ được thêm vào đây sau
    } 

    return (
        <div className="relative w-1/2 rounded-lg">
            <input
                className="search-input w-full px-4 py-2 border focus:border-blue-500 outline-none placeholder-gray-400 pl-10"
                style={{ borderRadius: '12px' }}
                type="text"
                placeholder="Tìm kiếm công thức..."
            />
            <button onClick={handleSearch} className="absolute top-1/2 right-3 transform -translate-y-1/2">
                <img src={loupe} alt="Search" className="w-4 h-4" />
            </button>
        </div>


    );
}

export default SearchBar;