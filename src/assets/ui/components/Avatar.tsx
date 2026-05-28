import { useLocation } from "react-router-dom";

type avatarType = {avatar: "default.png" | string};

interface avatarProps {
    size : string;
}

function Avatar({size}: avatarProps) {
    const location = useLocation()
    const currentUser = location.state?.userData as avatarType | undefined;
    const image = currentUser.avatar ? currentUser.avatar : "default.png";

    return (
        <img className="avatar" src={`/avatar/${image}`} alt="Avatar" style={{width:size, height:size}}/>
    )
}
export default Avatar;