import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><NavLink to="/"  className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item} >Profile</NavLink></div>
            <div><NavLink to="/dialogs"  className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}>Messages</NavLink></div>
            <div><NavLink to="/news"  className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}>News</NavLink></div>
            <div><NavLink to="/music"  className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}>Music</NavLink></div>
            <div><NavLink to="/settings"  className={({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}>Settings</NavLink></div>
        </nav>
    );
}

export default Navbar;