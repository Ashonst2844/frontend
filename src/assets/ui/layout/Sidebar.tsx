import PrimaryButton from "../components/PrimaryButton";

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
                <p>{nama}</p>
                <span>( {nip} )</span>
            </div>
            <div id="app-container">
                <PrimaryButton w="100%" h="100%" link="#dashboard">
                    <img src="src/assets/icon/app-icon/dashboard.svg" alt="Dashboard" />
                    <p>Dashboard</p>
                </PrimaryButton>
                <PrimaryButton w="100%" h="100%" link="#tasks">
                    <img src="src/assets/icon/app-icon/task.svg" alt="Tasks" />
                    <p>Tasks</p>
                </PrimaryButton>
                <PrimaryButton w="100%" h="100%" link="#teacher-notes">
                    <img src="src/assets/icon/app-icon/note.svg" alt="Your Notes" />
                    <p>Notes</p>
                </PrimaryButton>
                <PrimaryButton w="100%" h="100%" link="#teacher-files">
                    <img src="src/assets/icon/app-icon/file.svg" alt="Your Files" />
                    <p>Files</p>
                </PrimaryButton>
            </div>
        </div>
    )
}
export default Sidebar;