import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) =>{
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="React learn" id="1"/>
                <DialogItem name="Workout" id="2"/>
                <DialogItem name="ComeInHome" id="3"/>
                <DialogItem name="Work" id="4"/>
                <DialogItem name="ReadingABook" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi! How your study?" />
                <Message message="Do you learn React?" />
                <Message message="Good luck!" />
            </div>
        </div>
    )
}
const DialogItem = (props) =>{
    let path = "/dialogs/"+props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={({isActive}) => isActive ? s.active:""}>{props.name}</NavLink>
        </div>

    )
}
const Message = (props) =>{
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default Dialogs;