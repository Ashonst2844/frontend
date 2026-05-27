import { useLocation } from "react-router-dom";
import Button from "../components/Button";

import datas from "../../data/templates.json";

interface sidebarProps {
    nama: string;
    nip: string;
}

function Sidebar({nama, nip}: sidebarProps) {
    const avatar = "default.png"
    const location = useLocation();

    return(
        <div id="sidebar">
            <div id="profile" className="center background-gradient">
                <img src={`avatar/${avatar}`} alt="Avatar" />
                <div className="divider">
                    <p style={{textAlign:"center"}}>{nama}</p>
                    <span>( {nip} )</span>
                </div>
            </div>
            <div id="app-container">
                <Button type="primary" w="100%" h="100%" link={`/home`} state={location.state}>
                    <img src="src/assets/icon/app-icon/home.svg" alt="home" />
                    <span>Home</span>
                </Button>
                {datas.apps.map((app, index) => (
                    <Button
                        type="primary"
                        key={index}
                        w="100%"
                        h="100%"
                        link={`/home/${app.name}`}
                        state={location.state}
                    >
                        <img src={`src/assets/icon/app-icon/${app.name}.svg`} alt={app.name} />
                        <span>{app.label}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}
export default Sidebar;