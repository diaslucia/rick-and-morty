import { useState, useRef } from "react";
import "./SearchBar.scss";
import icon from "../../assets/magnifyingglass.png";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);

    const handleSearch = () => setSearch(searchInput.current.value);
    
    return(
        <div className="searchbar">
            <img className="searchbar-icon" src={icon} alt="magnifying glass icon" />
            <input className="searchbar-input" type="text" value={search} ref={searchInput} name="search user" placeholder="Search User" onChange={handleSearch}/>
        </div>
    );
}

export default SearchBar;