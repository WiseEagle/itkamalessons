import React from "react";
import s from "./Sidebar.module.css";
import Friend from "./Friend/Friend";
import {connect} from "react-redux";

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <h3>Friends</h3>
            <div className={s.friendsItems}>
                {props.friends}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends.map((f) => (
            <React.Fragment key={f.id}>
                <Friend name={f.name} image={f.image}/>
            </React.Fragment>
        ))
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default Sidebar;