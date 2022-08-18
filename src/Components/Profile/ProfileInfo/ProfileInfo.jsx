import bg from "../../../bg.png";
import user from "../../../user.png";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.mainbg}>
                <img src={bg} alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={user} alt=""/> and desc
            </div>
        </div>
    );
}

export default ProfileInfo;