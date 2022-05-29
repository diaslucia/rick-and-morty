import { useEffect, useContext } from "react";
import "./ItemList.scss";
import AppContext from "../../context/AppContext";
import Item from "../Item/Item";
import Modal from "../Modal/Modal";

const ItemList = () => {
  const {
    api,
    characters,
    setCharacters,
    toggle,
    handleToggle,
    species,
    modal,
  } = useContext(AppContext);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, [api, toggle]);

  return (
    <>
      {characters ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th className="table-column" onClick={handleToggle}>
                Specie ▾
              </th>
              <th>Gender</th>
              <th>Episodes</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {toggle
              ? species.map((character) => (
                  <Item key={character.id} character={character} />
                ))
              : characters.map((character) => (
                  <Item key={character.id} character={character} />
                ))}
          </tbody>
        </table>
      ) : (
        <p className="empty-table">No characters were found</p>
      )}
      {modal ? <Modal /> : null}
    </>
  );
};

export default ItemList;