import s from "./Friend.module.css";


const Friend = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.image}>
                <img src={props.image}/>
            </div>
            <div className={s.name}>
                <span>{props.name}</span>
            </div>
        </div>
    );
}

export default Friend;