import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Some mesage 1", likeCount: "3"},
        {id: 2, message: "Some mesage 2", likeCount: "6"},
        {id: 3, message: "Some mesage 3", likeCount: "1"},
        {id: 4, message: "Some mesage 4", likeCount: "0"}
    ]

    let postsElements = posts.map(p => (
            <React.Fragment key={p.id}>
                <Post message={p.message} likeCount={p.likeCount}/>
            </React.Fragment>
        )
    );

    return (
        <div className={s.myPostsBlock}>
            <h3>my posts</h3>
            <div className={s.postMessage}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;