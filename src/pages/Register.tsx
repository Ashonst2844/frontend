import React from "react";
import Pages from "../assets/ui/layout/Pages";
import ButtonGroup from "../assets/ui/layout/ButtonGroup";

import FormBox from "../assets/ui/components/FormBox";
import PrimaryInput from "../assets/ui/components/PrimaryInput";
import Button from "../assets/ui/components/Button";

type RegisterProps = {
    page: "register" | "login";
    initiate: boolean;
    setInitiate: React.Dispatch<React.SetStateAction<boolean>>;
}

function Register({ page, initiate, setInitiate }: RegisterProps) {
    const [currentPage, openPage] = React.useState(page)

    return (
        <>
            <Pages id={currentPage} style={{display:"flex", justifyContent:"center", paddingTop:"150px"}}>
                <div style={{width:"50%", height:"40%"}}>
                    <Button type="back-button" w="60px" h="60px" link="/">
                        <img src="src/assets/icon/back-arrow.svg" alt="Back" />
                    </Button>
                    <h1>{currentPage === "register" ? "DAFTAR" : "MASUK"}</h1>
                    <FormBox action={currentPage === "register" ? "register.php" : "login.php"} method="POST">
                        <PrimaryInput type="text" placeholder="Nama" name="name" required style={currentPage === "register" ? {display:"block"}:{display:"none"}} />
                        <PrimaryInput type="number" placeholder="NIP (18 digit)" name="nip" required />
                        <PrimaryInput type="password" placeholder="Password" name="password" required />
                        <button style={{height:"60px", fontSize:"1.25rem"}} className="button background-gradient" type="submit">{currentPage === "register" ? "Daftar" : "Masuk"}</button>
                    </FormBox>
                    <ButtonGroup position="relative" style={{marginTop:"20px"}}>
                        <Button type="secondary" w="50%" h="100%" onClick={()=> openPage("login")}><p>Login</p></Button>
                        <Button type="secondary" w="50%" h="100%" onClick={()=> openPage("register")}><p>Daftar</p></Button>
                    </ButtonGroup>
                </div>
            </Pages>
        </>
    )
}
export default Register;