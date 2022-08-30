import userPict from "../user-message.png";

let initialState = {
    friends: [
        {id: 1, name: "Alex", image: userPict},
        {id: 2, name: "Nick K.", image: userPict},
        {id: 3, name: "Muskin", image: userPict},
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;