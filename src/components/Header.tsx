import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {

    return (
        <header>
            <p>Servus</p>

            <nav>
                <a href="#">Links</a>
                <a href="#">Mitte</a>
                <a href="#">Rechts</a>
            </nav>
        </header>
    )
}

export default Header;

