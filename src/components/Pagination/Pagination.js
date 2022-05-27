import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import "./Pagination.scss";

const Pagination = () => {
    const { prevPage, nextPage } = useContext(AppContext);

    const handle = () => nextPage();

    return(
       <div className="pagination">
            <button onClick={prevPage}>prev</button>
            <button onClick={handle}>next</button>
       </div> 
    );
}

export default Pagination;