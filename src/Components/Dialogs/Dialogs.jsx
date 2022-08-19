import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import user from "../../user-message.png";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => (
            <React.Fragment key={d.id}>
                <DialogItem id={d.id} name={d.name}/>
            </React.Fragment>
        )
    );

    let messagesElements = props.state.messages.map(m => (
            <React.Fragment key={m.id}>
                <Message userImg={user} message={m.message}  myMessage={m.myMessage}/>
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