import React from "react";
import userMessage from "../../../../user-message.png";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.image}>
                <img src={userMessage} alt=""/>
            </div>
            <div className={s.message}>{props.message}</div>
            <span className="s.like">
                <span>like </span>{props.likeCount}
            </span>
        </div>
    );
}

export default Post;