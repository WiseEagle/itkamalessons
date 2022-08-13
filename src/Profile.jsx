import bg from "./bg.png";
import user from "./user.png";

const Profile = () => {
    return (
        <div className="content">
            <div><img src={bg} alt=""/></div>
            <div><img src={user} alt=""/> + desc</div>
            <div>
                My Posts
                <div>New post</div>
                <div>Posts</div>
            </div>
            Main content
        </div>
    );
}

export default Profile;