import React from "react";
import s from "./Day.module.css";
import Task from "./Tasks/Task/Task";

const Day = (props) => {
    return (
        <div className={s.day}>
            <div className={s.description}>
                <span>Day Start time: {props.start}</span><span>Day tasks profit: {props.profit}</span><span>Day End time: {props.end}</span>
            </div>
            <div className={s.timescale}>
                <Task task="dog walking"/>
                <Task task="eat oatflakes"/>
            </div>
        </div>
    );

}

export default Day;