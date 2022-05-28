import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import AppContext from '../../context/AppContext';
import "./Pagination.scss";

const Pagination = () => {
    const { setPageNumber, info } = useContext(AppContext);

    return(
        <ReactPaginate
        className="pagination"
        activeLinkClassName="active-link"
        activeClassName="active"
        pageCount={info?.pages}
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