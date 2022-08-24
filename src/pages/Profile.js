import ChangeProfile from "../components/ChangeProfile";

export const Profile= (props) =>{
    return (
        <div>
        Logged in as : {props.username} 
        <ChangeProfile setUsername={props.setUsername}/>
        </div>
        );
};