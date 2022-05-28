import { useContext } from 'react';
import "./ItemDetail.scss";
import AppContext from '../../context/AppContext';

const ItemDetail = () => {
    const { itemDetail } = useContext(AppContext);
    return(
        <div>
            <h1>{itemDetail.name}</h1>
        </div>
    );
}

export default ItemDetail;