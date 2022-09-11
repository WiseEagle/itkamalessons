import React from "react";
import {
    addGoalCreator, getMonthYear,
    goalDateCreator,
    goalDescCreator,
    goalNameCreator,
    goalPictCreator
} from "../../redux/goals-reducer";
import MyFuture from "./MyFuture";


const MyFutureContainer = (props) => {

    let state = props.store.getState();

    let onChangeGoalName = (name) => {
        props.store.dispatch(goalNameCreator(name));
    };
    let onChangeGoalPict = (pict) => {
        props.store.dispatch(goalPictCreator(pict));
    };
    let onChangeGoalDate = (date) => {
        props.store.dispatch(goalDateCreator(date));
    };
    let onChangeGoalDesc = (desc) => {
        props.store.dispatch(goalDescCreator(desc));
    };
    let addGoal = () => {
        props.store.dispatch(addGoalCreator());
    };

    let estimateDates = state.goalsPage.goals.map((goal) => {
        let date = getMonthYear(goal.estimate);
        return <div key={goal.id}>{date.month} <span>{date.year}</span></div>
    });

    let skills = state.goalsPage.goals.map((goal) => {
        return <div key={goal.id}>{goal.name}</div>
    });

    let pictures = state.goalsPage.goals.map((goal) => {
        return <img src={goal.pict} />
    });


    return (<MyFuture state={state} changeGoalName={onChangeGoalName}
                      changeGoalPict={onChangeGoalPict}
                      changeGoalDate={onChangeGoalDate}
                      changeGoalDesc={onChangeGoalDesc}
                      addGoal={addGoal}
                      pictures={pictures}
                      estimateDates={estimateDates}
                      skills={skills}/> )
}

export default MyFutureContainer;