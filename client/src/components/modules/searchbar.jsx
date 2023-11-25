import loupe from "/src/assets/loupe.png";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const SearchBar = () => {
  const navigate = useNavigate();
  const [keywords, setKeywords] = useState('');
  
  const handleSearch = () => {
    navigate(`/search?keywords=${encodeURIComponent(keywords)}`);
  };

  return (
    <div className="relative w-1/2 rounded-lg">
      <input
        className="search-input w-full px-4 py-2 border bg-green-500 outline-none placeholder-gray-700 pl-10"
        style={{ borderRadius: "12px" }}
        type="text"
        placeholder="Tìm kiếm công thức..."
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="absolute top-1/2 right-3 transform -translate-y-1/2"
      >
        <img src={loupe} alt="Search" className="w-4 h-4" />
      </button>
    </div>
  );
};


export default SearchBar;
