import { useContext } from 'react';
import { Link } from "react-router-dom";
import "./ItemDetail.scss";
import AppContext from '../../context/AppContext';

const ItemDetail = () => {
    const { itemDetail } = useContext(AppContext);

    return(
        <div className="itemDetail">
            <img className="itemDetail-img" src={itemDetail[0].image} alt="character"/>
            <div className="itemDetail-container">
                <h1 className="itemTitle">Name</h1>
                <p className="itemText">{itemDetail[0].name}</p>
                <h1 className="itemTitle">Code</h1>
                <p className="itemText">{itemDetail[0].status}</p>
                <h1 className="itemTitle">Air Date</h1>
                <p className="itemText">{itemDetail[0].species}</p>
                <h1 className="itemTitle">Type</h1>
                <p className="itemText">{itemDetail[0].type ? itemDetail[0].type : "unknown"}</p>
                <h1 className="itemTitle">Gender</h1>
                <p className="itemText">{itemDetail[0].gender}</p>
                <h1 className="itemTitle">Origin</h1>
                <p className="itemText">{itemDetail[0].origin.name}</p>
            </div>
            <Link to="/" className="link-close">Close</Link>
        </div>
    );
}

export default ItemDetail;