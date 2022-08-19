import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        // {(props.myMessage) => props.myMessage ? `${s.item} ${s.active}` : s.item}
        <div className={props.myMessage ? `${s.message} ${s.myMessage}` : s.message}>
            <div className={s.messageImage}><img src={props.userImg} alt=""/></div>
            <div className={s.messageContent}>{props.message}</div>
        </div>
    );
}

export default Message;