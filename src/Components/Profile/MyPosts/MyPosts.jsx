import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPostsBlock}>
            <h3>my posts</h3>
            <div className={s.postMessage}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Some mesage 1" likeCount="3"/>
                <Post message="Some mesage 2" likeCount="6"/>
                <Post message="Some mesage 3" likeCount="1"/>
                <Post message="Some mesage 4" likeCount="0"/>
            </div>
        </div>

    );
}

export default MyPosts;