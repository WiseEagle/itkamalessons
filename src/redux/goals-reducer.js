const CHANGE_GOAL_NAME = "CHANGE-GOAL-NAME";
const CHANGE_GOAL_PICT = "CHANGE-GOAL-PICT";
const CHANGE_GOAL_DATE = "CHANGE-GOAL-DATE";
const CHANGE_GOAL_DESC = "CHANGE-GOAL-DESC";
const ADD_GOAL = "ADD-GOAL";

let initialState = {
    goals:[
        {id: 1, name: "React", pict: "https://pedrorijo.com/assets/img/react-logo.png", estimate: "09/01/2022", description: "Some description for R"},
        {id: 2, name: "Node", pict: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png", estimate: "10/01/2022", description: "Some description for N"},
        {id: 3, name: "Angular", pict: "https://dailysmarty-production.s3.amazonaws.com/uploads/post/img/522/angular-card.png", estimate: "11/01/2022", description: "Some description for A"}

    ],
    newGoal: {
        newGoalName: "",
        newGoalPict: "",
        newGoalDate: "",
        newGoalDesc: ""
    }
}

const goalsReducer = (state = initialState, action) => {

    switch (action.type){
        case CHANGE_GOAL_NAME:
            state.newGoal.newGoalName = action.goalName;
            return state;
        case CHANGE_GOAL_PICT:
            state.newGoal.newGoalPict = action.goalPict;
            return state;
        case CHANGE_GOAL_DATE:
            state.newGoal.newGoalDate = action.goalDate;
            return state;
        case CHANGE_GOAL_DESC:
            state.newGoal.newGoalDesc = action.goalDesc;
            return state;
        case ADD_GOAL:
            let newGoal = {
                id: state.goals.length + 1,
                name: state.newGoal.newGoalName,
                pict: state.newGoal.newGoalPict,
                estimate: state.newGoal.newGoalDate,
                description: state.newGoal.newGoalDesc
            }
            state.goals.push(newGoal);
            return state;

        default:
            return state;
    }

}

export const getMonthYear = (date) =>{
    let d = new Date(date);
    let month = d.toLocaleString('en-US', { month: 'long' });
    let year = d.toLocaleString('en-US', { year: 'numeric' });
    return {month, year};
}

export const goalNameCreator = (name) => {
    return {type: CHANGE_GOAL_NAME, goalName: name};
}
export const goalPictCreator = (pict) => {
    return {type: CHANGE_GOAL_PICT, goalPict: pict};
}
export const goalDateCreator = (date) => {
    return {type: CHANGE_GOAL_DATE, goalDate: date};
}
export const goalDescCreator = (desc) => {
    return {type: CHANGE_GOAL_DESC, goalDesc: desc};
}
export const addGoalCreator = () => {
    return {type: ADD_GOAL};
}

export default goalsReducer;