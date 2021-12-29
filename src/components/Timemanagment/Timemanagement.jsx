import React from "react";
import s from "./Timemanagement.module.css";
import Day from "./Day/Day";

const Timemanagement = (props) => {
    return (
        <div className="app-wrapper-content">
            <div className="questions-area">
                <a href="#">+Add/edit first job a day</a>
                <Day start="9:00" profit="90%" end="23:00" />

            </div>
        </div>
    );

}

export default Timemanagement;