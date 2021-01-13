import React from "react";
import logo from "./assets/logo.svg";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header__container">
            <div className="header__logo" style={{
                backgroundImage: `url(${logo})`
            }}/>
        </header>
    );
}

export default Header;