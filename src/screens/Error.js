import { Link } from "react-router-dom";
import "./Errors.scss";

const Error = () => {
    return(
        <div className="error">
            <h1 className="error-title">Oops!</h1>
            <h2 className="error-text">Error 404: Page not found</h2>
            <Link to="/" className="error-button">Go back</Link>
        </div>
    );
}

export default Error;