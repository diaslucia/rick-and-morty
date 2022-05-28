import React, { useState } from "react";

const AppContext = React.createContext({});

export const DataProvider = ({ children }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [characters, setCharacters] = useState([]);
    const [itemDetail, setItemDetail] = useState([]);
    const [info, setInfo] = useState([]);

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        setPageNumber(1);
    }

    const renderItemDetail = (id) => {
        let singleCharacter = characters.filter(item => item.id === id);
        setItemDetail(singleCharacter[0]);
    }

    const handleCharacters = (items) => {
        items.sort((a, b) => {
            let firsta = a.name.toLowerCase();
            let firstb = b.name.toLowerCase();
            if (firsta < firstb) {
                return -1;
            }
            if (firsta > firstb) {
                return 1;
            }
            return 0;
        });
    }
    handleCharacters(characters);
   
    return(
        <AppContext.Provider value={{
                                        api,
                                        pageNumber,
                                        setPageNumber,
                                        characters,
                                        setCharacters,
                                        handleCharacters,
                                        renderItemDetail,
                                        itemDetail,
                                        handleSearch,
                                        search,
                                        info,
                                        setInfo
                                    }}>
            { children }
        </AppContext.Provider>
    )
} 

export default AppContext;