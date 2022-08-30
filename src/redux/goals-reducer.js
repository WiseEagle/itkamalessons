import userPict from "../user-message.png";

let initialState = {
    goals:[
        {id: 1, name: "React", pict: "", estimate: "", description: ""},
        {id: 2, name: "Node", pict: "", estimate: "", description: ""}
    ],
    newGoal: {
        newGoalName: "",
        newGoalPict: "",
        newGoalDate: "",
        newGoalDesc: ""
    }
}

const goalsReducer = (state = initialState, action) => {
    return state;
}

export default goalsReducer;