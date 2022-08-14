import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to="/dialogs/1">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Vetal</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Mushket</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Muskin</NavLink>
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