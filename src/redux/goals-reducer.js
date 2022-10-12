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
        case CHANGE_GOAL_NAME: {
            let stateCopy = {...state};
            stateCopy.newGoal = {...state.newGoal};
            stateCopy.newGoal.newGoalName = action.goalName;
            return stateCopy;
        }
        case CHANGE_GOAL_PICT: {
            let stateCopy = {...state};
            stateCopy.newGoal = {...state.newGoal};
            stateCopy.newGoal.newGoalPict = action.goalPict;
            return stateCopy;
        }
        case CHANGE_GOAL_DATE: {
            let stateCopy = {...state};
            stateCopy.newGoal = {...state.newGoal};
            stateCopy.newGoal.newGoalDate = action.goalDate;
            return stateCopy;
        }
        case CHANGE_GOAL_DESC: {
            let stateCopy = {...state};
            stateCopy.newGoal = {...state.newGoal};
            stateCopy.newGoal.newGoalDesc = action.goalDesc;
            return stateCopy;
        }
        case ADD_GOAL: {
            let stateCopy = {...state};
            stateCopy.newGoal = {...state.newGoal};
            stateCopy.goals = [...state.goals];
            let newGoal = {
                id: stateCopy.goals.length + 1,
                name: stateCopy.newGoal.newGoalName,
                pict: stateCopy.newGoal.newGoalPict,
                estimate: stateCopy.newGoal.newGoalDate,
                description: stateCopy.newGoal.newGoalDesc
            }
            stateCopy.goals.push(newGoal);
            stateCopy.newGoal.newGoalName = "";
            stateCopy.newGoal.newGoalPict = "";
            stateCopy.newGoal.newGoalDate = "";
            stateCopy.newGoal.newGoalDesc = "";
            return stateCopy; 
        }

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