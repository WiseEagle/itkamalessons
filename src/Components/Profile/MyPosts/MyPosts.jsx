import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Some mesage 1", likeCount: "3"},
        {id: 2, message: "Some mesage 2", likeCount: "6"},
        {id: 3, message: "Some mesage 3", likeCount: "1"},
        {id: 4, message: "Some mesage 4", likeCount: "0"}
    ]

    return (
        <div className={s.myPostsBlock}>
            <h3>my posts</h3>
            <div className={s.postMessage}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
                <Post message={postsData[2].message} likeCount={postsData[2].likeCount}/>
                <Post message={postsData[3].message} likeCount={postsData[3].likeCount}/>
            </div>
        </div>

    );
}

export default MyPosts;