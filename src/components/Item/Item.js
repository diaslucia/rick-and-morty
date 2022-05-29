import { useContext } from "react";
import { Link } from "react-router-dom"
import "./Item.scss";
import AppContext from '../../context/AppContext';
import eye from "../../assets/eye.png";

const Item = ({character}) => {
    const { renderItemDetail, handleModal } = useContext(AppContext);

    return(
        <tr key={character.id}>
            <td className="table-name-row" data-label="Name">{character.name}</td>
            <td data-label="Status">{character.status}</td>
            <td data-label="Species">{character.species}</td>
            <td data-label="Gender">{character.gender}</td>
            <td data-label="Episodes">
                <p className="table-episodes" onClick={() => handleModal(character.id)}>Ver</p>
            </td>
            <td className="table-icon-container" data-label="Detail">
                <Link to="/detail">
                    <img onClick={() => renderItemDetail(character.id)} src={eye} alt="eye icon to see details"/>
                </Link>
            </td>
        </tr>
    )
}

export default Item;