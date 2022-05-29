import React, { useState } from "react";

const AppContext = React.createContext({});

export const DataProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [itemDetail, setItemDetail] = useState([]);
  const [species, setSpecies] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  let api = `${process.env.REACT_APP_API_KEY}character/?page=${pageNumber}&name=${search}`;

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
  };

  /* This function gets the input text and saves it */
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    setPageNumber(1);
  };

  /* This function finds the item you clicked */
  const renderItemDetail = (id) => {
    let singleCharacter = characters.filter((item) => item.id === id);
    setItemDetail(singleCharacter);
  };

  /* This function opens the modal and finds the item you selected */
  const handleModal = (id) => {
    let episodeCharacter = characters.filter((item) => item.id === id);
    setItemDetail(episodeCharacter);
    setModal(true);
    setEpisodes(episodeCharacter[0].episode);
  };

  /* This toggle gets characters ordered by specie */
  const handleToggle = () => {
    handleSpecies(characters);
    setToggle(!toggle);
  };

  /* This function sorts characters by specie */
  const handleSpecies = (items) => {
    let newItem = items;
    newItem.sort((a, b) => {
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
    setSpecies(newItem);
  };

  /* If toggle false, we want the characters ordered by name */
  if (toggle === false) handleCharacters(characters);

  /* This functions set the page number and resets the toggle */
  const handlePageNumber = (data) => {
    setPageNumber(data + 1);
    setToggle(false);
  };

  return (
    <AppContext.Provider
      value={{
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
        handlePageNumber,
        setModal,
        modal,
        handleModal,
        episodes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;