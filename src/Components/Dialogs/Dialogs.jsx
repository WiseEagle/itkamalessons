import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import user from "../../user-message.png";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => (
            <React.Fragment key={d.id}>
                <DialogItem id={d.id} name={d.name}/>
            </React.Fragment>
        )
    );

    let messagesElements = props.messages.map(m => (
            <React.Fragment key={m.id}>
                <Message userImg={user} message={m.message} myMessage={m.myMessage}/>
            </React.Fragment>
        )
    );

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;//it's analog of ref
        props.onNewMessageChange(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div className={s.messagesArea}>
                    {messagesElements}
                </div>
                <div className={s.newMessage}>
                    <div className={s.newMessageArea}>
                        <textarea placeholder="Enter your message"  onChange={onNewMessageChange}
                                  value={props.newMessageBody}></textarea>
                    </div>
                    <div className={s.newMessageButton}>
                        <button onClick={onSendMessageClick}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;