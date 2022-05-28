import React, { useState } from "react";

const AppContext = React.createContext({});

export const DataProvider = ({ children }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [characters, setCharacters] = useState([]);
    const [itemDetail, setItemDetail] = useState([]);
    const [species, setSpecies] = useState([]);
    const [toggle, setToggle] = useState(false);

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

    /* This function sorts characters ascending */
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

    /* This function gets the input texts and saves it */
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        setPageNumber(1);
    }

    /* This function finds the item you clicked */
    const renderItemDetail = (id) => {
        let singleCharacter = characters.filter(item => item.id === id);
        setItemDetail(singleCharacter);
    }

    /* This function sorts characters by specie and save it in a variable */
    const handleSpecies = (items) => {
        const newList = items;
        newList.sort((a, b) => {
            let firsta = a.species.toLowerCase();
            let firstb = b.species.toLowerCase();
            if (firsta < firstb) {
                return -1;
            }
            if (firsta > firstb) {
                return 1;
            }
            return 0;
        });
        setSpecies(newList);
    }

    const handleToggle = () => {
        handleSpecies(characters);
        setToggle(!toggle);
    }

    return(
        <AppContext.Provider value={{
                                        api,
                                        pageNumber,
                                        setPageNumber,
                                        characters,
                                        setCharacters,
                                        handleCharacters,
                                        itemDetail,
                                        renderItemDetail,
                                        search,
                                        handleSearch,
                                        species,
                                        toggle,
                                        setToggle,
                                        handleToggle,
                                    }}>
            { children }
        </AppContext.Provider>
    )
} 

export default AppContext;