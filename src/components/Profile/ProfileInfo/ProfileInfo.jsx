import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div >
            <div className={s.profileHeader}>
                <img src="https://www.partyrama.co.uk/wp-content/uploads/2014/02/beach006.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src="https://nulm.gov.in/images/user.png"/> + desc
            </div>
        </div>
    );
}

export default ProfileInfo;