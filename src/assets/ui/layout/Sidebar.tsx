interface sidebarProps {
    avatar: string;
}

function Sidebar({avatar}: sidebarProps) {
    return(
        <div id="sidebar">
            <div id="profile" className="center background-gradient">
                <img src={avatar} alt="Avatar" />
                <p>Nama Guru</p>
                <span>( 01234567 201010 1 001 )</span>
            </div>
        </div>
    )
}
export default Sidebar;