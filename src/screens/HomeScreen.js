import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ItemList from "../components/ItemList/ItemList";

const HomeScreen = () => {
    return(
        <div>
            <Header/>
            <SearchBar/>
            <ItemList/>
        </div>
    )
}

export default HomeScreen;