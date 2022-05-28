import { useContext } from "react";
import { Link } from "react-router-dom"
import "./Item.scss";
import AppContext from '../../context/AppContext';
import eye from "../../assets/eye.png";

const Item = ({character}) => {
    const { renderItemDetail} = useContext(AppContext);

    return(
        <tr key={character.id}>
            <td className="table-name-row">{character.name}</td>
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
    )
}

export default Item;