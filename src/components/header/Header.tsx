import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

    return (
        <header>
            <p>Servus</p>

            <nav>
                <Link to="/">Home</Link>
                <Link to="./dashboard">Dashboard</Link>
                <a href="#">Rechts</a>
            </nav>
        </header >
    )
}

export default Header;

