import { useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import "./ItemList.scss";
import AppContext from '../../context/AppContext';
import eye from "../../assets/eye.png";

const ItemList = () => {
    const { api , characters, setCharacters, setInfo, renderItemDetail } = useContext(AppContext);

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
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th className="table-column" onClick={() => null}>Specie</th>
                            <th>Gender</th>
                            <th>Episodes</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {characters.map(character => (
                            <tr key={character.id}>
                                <td>{character.name}</td>
                                <td>{character.status}</td>
                                <td>{character.species}</td>
                                <td>{character.gender}</td>
                                <td>link</td>
                                <td className="table-icon-container">
                                    <Link to="/detail">
                                        <img onClick={() => renderItemDetail(character.id)} src={eye} alt="eye icon to see details"/>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>)
                :
                (<p className="empty-table">No characters were found</p>)}
            </>
    );
}

export default ItemList;