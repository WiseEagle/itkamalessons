import userPict from "./../user-message.png";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Some mesage 1", likeCount: 3},
                {id: 2, message: "Some mesage 2", likeCount: 6},
                {id: 3, message: "Some mesage 3", likeCount: 1},
                {id: 4, message: "Some mesage 4", likeCount: 8}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Vetal'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'Mushket'},
                {id: 5, name: 'Muskin'},
                {id: 6, name: 'Nastish'},
                {id: 7, name: 'Nick K.'}
            ],
            messages: [
                {id: 1, message: "Hi, how your learning", myMessage: false},
                {id: 2, message: "Do you learn?", myMessage: false},
                {id: 3, message: "Yes! I learn everyday!", myMessage: true},
                {id: 4, message: "Ok, nice job!", myMessage: false}
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: "Alex", image: userPict},
                {id: 2, name: "Nick K.", image: userPict},
                {id: 3, name: "Muskin", image: userPict},
            ]
        }
    },
    _callSubscriber() {
        console.log("some pass!");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //pattern observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText,
                myMessage: true
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }

    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
});

window.store = store;

export default store;