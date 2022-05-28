import "./HomeScreen.scss"
import SearchBar from "../components/SearchBar/SearchBar";
import ItemList from "../components/ItemList/ItemList";
import Pagination from "../components/Pagination/Pagination";

const HomeScreen = () => {
    return(
        <div className="homeScreen">
            <SearchBar/>
            <ItemList/>
            <Pagination/>
        </div>
    )
}

export default HomeScreen;