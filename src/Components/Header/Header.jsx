import logo from "../../logo.png";
import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to="/"><img src={logo} alt=""/></NavLink>
        </header>
    );
}

export default Header;
