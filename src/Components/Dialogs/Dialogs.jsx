import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    <NavLink to="/dialogs/1" className={({ isActive }) => isActive ? `${s.dialog} ${s.active}` : s.dialog}>Alex</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/2" className={({ isActive }) => isActive ? `${s.dialog} ${s.active}` : s.dialog} >Vetal</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/3" className={({ isActive }) => isActive ? `${s.dialog} ${s.active}` : s.dialog}>Viktor</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/4" className={({ isActive }) => isActive ? `${s.dialog} ${s.active}` : s.dialog}>Mushket</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/5" className={({ isActive }) => isActive ? `${s.dialog} ${s.active}` : s.dialog}>Muskin</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className="message">first</div>
                <div className="message">second</div>
                <div className="message">third</div>
                
            </div>
        </div>
    );
}

export default Dialogs;