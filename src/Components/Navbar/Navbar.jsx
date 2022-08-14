import React from "react";
import s from "./Navbar.module.css";
import {Route} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><a href="/profile"  className={s.item}>Profile</a></div>
            <div><a href="/dialogs"  className={s.item}>Messages</a></div>
            <div><a href="/news"  className={s.item}>News</a></div>
            <div><a href="/news"  className={s.item}>Music</a></div>
            <div><a href="/settings"  className={s.item}>Settings</a></div>
        </nav>
    );
}

export default Navbar;