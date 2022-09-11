import React from "react";
import s from "./MyFuture.module.css";

const MyFuture = (props) => {

    let onChangeGoalName = (e) => {
        let name = e.target.value;
        props.changeGoalName(name);
    };
    let onChangeGoalPict = (e) => {
        let pict = e.target.value;
        props.changeGoalPict(pict);
    };
    let onChangeGoalDate = (e) => {
        let date = e.target.value;
        props.changeGoalDate(date);
    };
    let onChangeGoalDesc = (e) => {
        let desc = e.target.value;
        props.changeGoalDesc(desc);
    };

    let addGoal = () => props.addGoal();

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
                        {props.pictures}
                    </div>
                </div>
                <div className={s.newGoal}>

                        <label>
                            <span>Name</span>
                            <input type="text" onChange={onChangeGoalName}
                                   value={props.state.goalsPage.newGoal.newGoalName}/>
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
                                      value={props.state.goalsPage.newGoal.newGoalDesc}></textarea>
                        </label>
                        <button onClick={addGoal}>Add Goal</button>

                </div>
                <div className={s.futureDiary}>
                    <div className={s.futureCalendar}>
                        {props.estimateDates}
                    </div>
                    <div className={s.futureGoals}>
                        {props.skills}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MyFuture;