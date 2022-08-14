import React from "react";
import bg from "../../../../bg.png";
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
                <a href="#">like {props.likeCount}</a>
            </span>
        </div>
    );
}

export default Post;