import React from "react";
import s from "./Task.module.css";

const Task = (props) => {
    return (
        <div className={s.task}>
            {props.task}
        </div>
    );

}

export default Task;