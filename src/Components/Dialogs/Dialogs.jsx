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
    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Vetal'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Mushket'},
        {id: 5, name: 'Muskin'},
        {id: 6, name: 'Nastish'},
        {id: 7, name: 'Nick K.'}
    ]

    let messagesData = [
        {id: 1, message: "Hi, how your learning"},
        {id: 2, message: "Do you learn?"},
        {id: 3, message: "Ok, nice job!"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name} />
                <DialogItem id={dialogsData[6].id} name={dialogsData[6].name} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
}

export default Dialogs;