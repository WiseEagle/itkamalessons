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

    let textMessage = React.createRef();

    let addMessage = () => {
        console.log(textMessage.current.value);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div className={s.messagesArea}>
                    {messagesElements}
                </div>
                <div className={s.newMessage}>
                    <div className={s.newMessageArea}><textarea ref={textMessage}></textarea></div>
                    <div className={s.newMessageButton}><button onClick={addMessage}>Add message</button></div>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;