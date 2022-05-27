import { useState } from 'react';
import "./HomeScreen.scss";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import ItemList from "../components/ItemList/ItemList";
import Pagination from "../components/Pagination/Pagination";

const HomeScreen = () => {
    const [characters, setCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    return(
        <div className="homeScreen">
            <Header/>
            <SearchBar/>
            <ItemList
                characters={characters}
                setCharacters={setCharacters}
                pageNumber={pageNumber}/>
            <Pagination
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            />
        </div>
    )
}

export default HomeScreen;