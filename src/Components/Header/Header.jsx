import logo from "../../logo.png";
import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt=""/>
        </header>
    );
}

export default Header;
