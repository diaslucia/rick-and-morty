import { useState, useEffect } from 'react';
import "./ItemList.scss";
import eye from "../../assets/eye.png";

const ItemList = () => {
    const [characters, setCharacters] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

    useEffect(()=> {
        fetch(api)
        .then(res => res.json())
        .then(data => setCharacters(data.results))
    }, [api]);

    return(
        <table>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Specie</th>
                    <th>Gender</th>
                    <th>Episodes</th>
                    <th>Detail</th>
                </tr>
                {characters.map(character => (
                    <tr>
                        <td>{character.name}</td>
                        <td>{character.status}</td>
                        <td>{character.species}</td>
                        <td>{character.gender}</td>
                        <td>link</td>
                        <td className="table-icon-container"><img src={eye} alt="eye icon to see details"/></td>
                    </tr>
                ))}
        </table>
    );
}

export default ItemList;