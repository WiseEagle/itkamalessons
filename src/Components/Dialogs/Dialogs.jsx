import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => (
            <React.Fragment key={d.id}>
                <DialogItem id={d.id} name={d.name}/>
            </React.Fragment>
        )
    );

    let messagesElements = props.messages.map(m => (
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