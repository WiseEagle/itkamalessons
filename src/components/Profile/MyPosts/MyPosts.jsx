import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message="Some posted text 1" />
                <Post message="Some posted text 2" />
                <Post message="Some posted text 3" />
                <Post message="Some posted text 4" />
            </div>
        </div>

    );
}

export default MyPosts;