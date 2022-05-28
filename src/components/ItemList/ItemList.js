import { useEffect, useContext } from 'react';
import "./ItemList.scss";
import AppContext from '../../context/AppContext';
import eye from "../../assets/eye.png";

const ItemList = () => {
    const { search, pageNumber, characters, setCharacters, setInfo } = useContext(AppContext);
    
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

    useEffect(()=> {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setCharacters(data.results)
            setInfo(data.info)
        })
    }, [api]);

    return(
        <>
            {characters ? 
                (<table>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Specie</th>
                            <th>Gender</th>
                            <th>Episodes</th>
                            <th>Detail</th>
                        </tr>
                        {characters.map(character => (
                            <tr key={character.id}>
                                <td>{character.name}</td>
                                <td>{character.status}</td>
                                <td>{character.species}</td>
                                <td>{character.gender}</td>
                                <td>link</td>
                                <td className="table-icon-container"><img src={eye} alt="eye icon to see details"/></td>
                            </tr>
                        ))}
                </table>)
                :
                (<p className="empty-table">No characters were found</p>)}
            </>
    );
}

export default ItemList;