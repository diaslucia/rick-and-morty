import { useContext } from "react";
import "./SearchBar.scss";
import AppContext from "../../context/AppContext";
import icon from "../../assets/magnifyingglass.png";

const SearchBar = () => {
  const { handleSearch, search } = useContext(AppContext);

  return (
    <div className="searchbar">
      <img className="searchbar-icon" src={icon} alt="magnifying glass icon" />
      <input
        className="searchbar-input"
        type="text"
        onChange={handleSearch}
        value={search}
        name="search user"
        placeholder="Search User"
      />
    </div>
  );
};

export default SearchBar;
