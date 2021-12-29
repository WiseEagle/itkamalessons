import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className= {({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item} >Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className= {({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/timemanagement" className= {({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}>T.Manage</NavLink>
            </div>
            <div>
                <NavLink to="/n1" className= {({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to="/n2" className= {({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/n3" className= {({ isActive }) => isActive ? `${s.item} ${s.active}` : s.item}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;