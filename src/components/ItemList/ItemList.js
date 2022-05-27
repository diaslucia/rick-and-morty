import { useState, useEffect } from 'react';
import "./ItemList.scss";

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
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Specie</th>
                    <th>Gender</th>
                    <th>Episodes</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>
                {characters.map(character => (
                    <tr>
                        <td>{character.name}</td>
                        <td>{character.status}</td>
                        <td>{character.specie}</td>
                        <td>{character.gender}</td>
                        <td>link</td>
                        <td>link</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ItemList;