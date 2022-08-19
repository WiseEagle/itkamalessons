import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

    return (
        <div>
            <div className={s.mainbg}>
                <img src={props.bg} alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.user} alt=""/> and desc
            </div>
        </div>
    );
}

export default ProfileInfo;