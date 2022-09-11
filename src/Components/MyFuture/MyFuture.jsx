import React from "react";
import s from "./MyFuture.module.css";
import {
    addGoalCreator, getMonthYear,
    goalDateCreator,
    goalDescCreator,
    goalNameCreator,
    goalPictCreator
} from "../../redux/goals-reducer";


const MyFuture = (props) => {

    let state = props.store.getState();

    let onChangeGoalName = (e) => {
        let name = e.target.value;
        props.store.dispatch(goalNameCreator(name));
    };
    let onChangeGoalPict = (e) => {
        let pict = e.target.value;
        props.store.dispatch(goalPictCreator(pict));
    };
    let onChangeGoalDate = (e) => {
        let date = e.target.value;
        props.store.dispatch(goalDateCreator(date));
    };
    let onChangeGoalDesc = (e) => {
        let desc = e.target.value;
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


    return (
        <div>
            <div className="s.futureHeader">
                <h1><span>I am in future</span></h1>
            </div>
            <div className={s.twoCols}>
                <div className={s.futureMan}>
                    <div className={s.futureManImage}>
                        <img src={require("./person-outline-clip-art-outline-of-a-man.png")} alt=""/>
                    </div>
                    <div className={s.futureManSkils}>
                        {pictures}
                    </div>
                </div>
                <div className={s.newGoal}>

                        <label>
                            <span>Name</span>
                            <input type="text" onChange={onChangeGoalName}
                                   value={state.goalsPage.newGoal.newGoalName}/>
                        </label>
                        <label>
                            <span>Picture url</span>
                            <input type="text" onChange={onChangeGoalPict}/>
                        </label>
                        <label>
                            <span>Estimate date</span>
                            <input type="date" onChange={onChangeGoalDate}/>
                        </label>
                        <label>
                            <span>Description</span>
                            <textarea cols="30" rows="10" onChange={onChangeGoalDesc}
                                      value={state.goalsPage.newGoal.newGoalDesc}></textarea>
                        </label>
                        <button onClick={addGoal}>Add Goal</button>

                </div>
                <div className={s.futureDiary}>
                    <div className={s.futureCalendar}>
                        {estimateDates}
                    </div>
                    <div className={s.futureGoals}>
                        {skills}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MyFuture;