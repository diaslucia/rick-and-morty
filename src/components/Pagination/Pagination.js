import "./Pagination.scss";

const Pagination = (props) => {
    const { pageNumber, setPageNumber } = props;

    const prev = () => {
        if(pageNumber >= 1){
        setPageNumber(page => page - 1);
        }
    };
    
    const next = () => {
        if(pageNumber <= 42){
        setPageNumber(page => page + 1);
        }
    };

    return(
       <div className="pagination">
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
       </div> 
    );
}

export default Pagination;