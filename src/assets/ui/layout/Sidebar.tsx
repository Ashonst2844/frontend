import PrimaryButton from "../components/PrimaryButton";

import datas from "../../data/templates.json";

interface sidebarProps {
    avatar: string;
    nama: string;
    nip: string;
}

function Sidebar({avatar, nama, nip}: sidebarProps) {
    return(
        <div id="sidebar">
            <div id="profile" className="center background-gradient">
                <img src={avatar} alt="Avatar" />
                <div className="divider">
                    <p style={{textAlign:"center"}}>{nama}</p>
                    <span>( {nip} )</span>
                </div>
            </div>
            <div id="app-container">
                {datas.apps.map((app, index) => (
                    <PrimaryButton key={index} w="100%" h="100%" link={`#${app.name}`}>
                        <img src={`src/assets/icon/app-icon/${app.name}.svg`} alt={app.name} />
                        <span>{app.label}</span>
                    </PrimaryButton>
                ))}
            </div>
        </div>
    )
}
export default Sidebar;