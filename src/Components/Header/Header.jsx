import logo from "../../logo.png";
import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <a href="/"><img src={logo} alt=""/></a>
        </header>
    );
}

export default Header;
