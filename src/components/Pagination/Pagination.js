import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import "./Pagination.scss";
import AppContext from '../../context/AppContext';

const Pagination = () => {
    const { setPageNumber } = useContext(AppContext);

    return(
        <ReactPaginate
        className="pagination"
        activeLinkClassName="active-link"
        activeClassName="active"
        pageCount={42}
        nextLabel=">>"
        previousLabel="<<"
        breakLabel=""
        pageRangeDisplayed={4}
        marginPagesDisplayed={0}
        onPageChange={data => setPageNumber(data.selected + 1)}
        />
    );
}

export default Pagination;