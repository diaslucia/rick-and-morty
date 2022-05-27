import React, { useState } from "react";

const AppContext = React.createContext({});

export const DataProvider = ({ children }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [characters, setCharacters] = useState([]);

    const prevPage = () => {
        if(pageNumber >= 1){
            setPageNumber(page => page - 1);
        }
    }

    const nextPage = () => {
        if(pageNumber <= 42){
            setPageNumber(page => page + 1);
        }
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        setPageNumber(1);
    }

    return(
        <AppContext.Provider value={{
                                        pageNumber,
                                        prevPage,
                                        nextPage,
                                        handleSearch,
                                        search,
                                        characters,
                                        setCharacters
                                    }}>
            { children }
        </AppContext.Provider>
    )
} 

export default AppContext;