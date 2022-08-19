import React from "react";
import s from "./Sidebar.module.css";
import Friend from "./Friend/Friend";

const Sidebar = (props) => {

    let friends = props.state.friends.map((f) => (
        <React.Fragment key={f.id}>
            <Friend name={f.name} image={f.image}/>
        </React.Fragment>
    ));

    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div className={s.friendsItems}>
                {friends}
            </div>
        </div>
    );
}

export default Sidebar;