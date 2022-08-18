import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`} className={({ isActive }) => isActive ? `${s.dialog} ${s.active}` : s.dialog}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    );
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id="1" name="Alex" />
                <DialogItem id="2" name="Vetal" />
                <DialogItem id="3" name="Viktor" />
                <DialogItem id="4" name="Mushket" />
                <DialogItem id="5" name="Muskin" />
                <DialogItem id="6" name="Nastish" />
                <DialogItem id="7" name="Nick K." />
            </div>
            <div className={s.messages}>
                <Message message="Hi, how your learning" />
                <Message message="Hi, how your learning" />
                <Message message="Hi, how your learning" />
                <Message message="Hi, how your learning" />
                
            </div>
        </div>
    );
}

export default Dialogs;