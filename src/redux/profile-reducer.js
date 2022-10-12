const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
    posts: [
        {id: 1, message: "Some mesage 1", likeCount: 3},
        {id: 2, message: "Some mesage 2", likeCount: 6},
        {id: 3, message: "Some mesage 3", likeCount: 1},
        {id: 4, message: "Some mesage 4", likeCount: 8}
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;