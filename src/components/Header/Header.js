import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
    return(
        <header>
            <h1 className="header-title">Rick & Morty Characters</h1>
            <img className="header-logo" src={logo} alt="Logo Sirius"/>
        </header>
    )
}

export default Header;