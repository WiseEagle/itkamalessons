import React from "react";
import s from "./MyFuture.module.css";


const MyFuture = (props) => {
    return(
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
                        <img src="https://pedrorijo.com/assets/img/react-logo.png" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png" alt=""/>
                        <img src="https://dailysmarty-production.s3.amazonaws.com/uploads/post/img/522/angular-card.png" alt=""/>
                    </div>
                </div>
                <div className={s.futureDiary}>
                    <div className={s.futureCalendar}>
                        <div>September <span>2022</span></div>
                        <div>October <span>2022</span></div>
                        <div>November <span>2022</span></div>
                    </div>
                    <div className={s.futureGoals}>
                        <div>React</div>
                        <div>Node</div>
                        <div>Angular</div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MyFuture;