import React from "react";
import {
    addGoalCreator, getMonthYear,
    goalDateCreator,
    goalDescCreator,
    goalNameCreator,
    goalPictCreator
} from "../../redux/goals-reducer";
import MyFuture from "./MyFuture";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state,
        pictures:state.goalsPage.goals.map((goal) => {
            return <img  key={goal.id} src={goal.pict} />
        }),
        estimateDates:state.goalsPage.goals.map((goal) => {
            let date = getMonthYear(goal.estimate);
            return <div key={goal.id}>{date.month} <span>{date.year}</span></div>
        }),
        skills:state.goalsPage.goals.map((goal) => {
            return <div key={goal.id}>{goal.name}</div>
        })
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeGoalName:(name) => {
            dispatch(goalNameCreator(name));
        },
        changeGoalPict:(pict) => {
            dispatch(goalPictCreator(pict));
        },
        changeGoalDate:(date) => {
            dispatch(goalDateCreator(date));
        },
        changeGoalDesc:(desc) => {
            dispatch(goalDescCreator(desc));
        },
        addGoal:() => {
            dispatch(addGoalCreator());
        }
    }
}

const MyFutureContainer = connect(mapStateToProps,mapDispatchToProps)(MyFuture);

export default MyFutureContainer;