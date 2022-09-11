import userPict from "./../user-message.png";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import goalsReducer from "./goals-reducer";

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
            newMessageBody: ""
        },
        goalsPage: {
          goals:[
              {id: 1, name: "React", pict: "", estimate: "10-10-10", description: ""},
              {id: 2, name: "Node", pict: "", estimate: "", description: ""}
          ],
          newGoal: {
              newGoalName: "",
              newGoalPict: "",
              newGoalDate: "",
              newGoalDesc: ""
          }
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
    /*subscribe on observer function, in our case it's rerenderEntireTree*/
    subscribe(observer) {
        this._callSubscriber = observer; //pattern observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.goalsPage = goalsReducer(this._state.goalsPage, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;