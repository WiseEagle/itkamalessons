import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import bg from "../../bg.png";
import user from "../../user.png";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo bg={bg} user={user}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;