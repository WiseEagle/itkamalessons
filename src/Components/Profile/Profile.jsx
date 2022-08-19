import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import bg from "../../bg.png";
import user from "../../user.png";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo bg={bg} user={user}/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;