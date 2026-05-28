import Avatar from "../assets/ui/components/Avatar";
import Button from "../assets/ui/components/Button";

import Pages from "../assets/ui/layout/Pages";
import Container from "../assets/ui/layout/Container";
import ButtonGroup from "../assets/ui/layout/ButtonGroup";

import { useNavigate } from "react-router-dom";

interface accountProps {
    nama: string;
    nip: string;
    subject: string;
}

function Account({nama,nip,subject}: accountProps) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirm = window.confirm("Apakah Anda yakin ingin menghapus akun ini? Tindakan ini tidak dapat dibatalkan.");
        if (!confirm) return; 

        try {
            const response = await fetch(`http://localhost:5000/api/delete-account/${nip}`, {
                method: "DELETE"
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || result.message || "Gagal menghapus akun, Coba lagi.");
            }
            alert("Akun terhapus.");
            navigate("/register");

        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Terjadi kesalahan.";
            alert(message);
        }
    };
    
    return (
        <Pages id="account" className="center" style={{flexDirection:"column"}}>
            <Avatar size="130px"/>
            <Container w="70%" h="50%" id="bio-container">
                <div id="bio" style={{width:"100%", padding:"10px"}}>
                    <h2>Nama Guru</h2>
                    <span>{nama}</span>
                    <h2>NIP</h2>
                    <span>{nip}</span>
                    <h2>Mata Pelajaran</h2>
                    <span>{subject}</span>
                </div>
                <ButtonGroup style={{width:"100%", padding:"10px"}} id="account-button-group">
                    <Button w="50%" h="50px" type="primary"><p>Edit</p></Button>
                    <Button w="50%" h="50px" type="danger" onClick={handleDelete}><p>Delete</p></Button>
                </ButtonGroup>
            </Container>
        </Pages>
    )
}
export default Account;