import bg from "../../bg.png";
import user from "../../user.png";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.mainbg}>
                <img src={bg} alt=""/>
            </div>
            <div>
                <img src={user} alt=""/> + desc
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;