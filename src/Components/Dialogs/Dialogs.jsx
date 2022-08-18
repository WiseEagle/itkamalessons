import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`}
                     className={({isActive}) => isActive ? `${s.dialog} ${s.active}` : s.dialog}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    );
}

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Vetal'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Mushket'},
        {id: 5, name: 'Muskin'},
        {id: 6, name: 'Nastish'},
        {id: 7, name: 'Nick K.'}
    ]

    let messages = [
        {id: 1, message: "Hi, how your learning"},
        {id: 2, message: "Do you learn?"},
        {id: 3, message: "Ok, nice job!"}
    ]

    let dialogsElements = dialogs.map(d => (
            <React.Fragment key={d.id}>
                <DialogItem id={d.id} name={d.name}/>
            </React.Fragment>
        )
    );

    let messagesElements = messages.map(m => (
            <React.Fragment key={m.id}>
                <Message message={m.message}/>
            </React.Fragment>
        )
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
        </div>
    );
}

export default Dialogs;