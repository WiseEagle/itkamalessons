import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => (
            <React.Fragment key={p.id}>
                <Post message={p.message} likeCount={p.likeCount}/>
            </React.Fragment>
        )
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        console.log(text);
    };

    return (
        <div className={s.myPostsBlock}>
            <h3>my posts</h3>
            <div className={s.postMessage}>
                <textarea name="" id="" cols="30" rows="10" ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;