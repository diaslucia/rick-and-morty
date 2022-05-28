import React, { useState } from "react";

const AppContext = React.createContext({});

export const DataProvider = ({ children }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        setPageNumber(1);
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
   
    return(
        <AppContext.Provider value={{
                                        pageNumber,
                                        setPageNumber,
                                        characters,
                                        setCharacters,
                                        handleCharacters,
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