import Button from "../components/Button";

import datas from "../../data/templates.json";

interface sidebarProps {
    nama: string;
    nip: string;
}

function Sidebar({ nama, nip}: sidebarProps) {
    const avatar = "default.png"
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
                    <Button type="primary" key={index} w="100%" h="100%">
                        <img src={`src/assets/icon/app-icon/${app.name}.svg`} alt={app.name} />
                        <span>{app.label}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}
export default Sidebar;