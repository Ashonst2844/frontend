import Pages from "../assets/ui/layout/Pages";
import ButtonGroup from "../assets/ui/layout/ButtonGroup";

import FormBox from "../assets/ui/components/FormBox";
import PrimaryInput from "../assets/ui/components/PrimaryInput";
import Button from "../assets/ui/components/Button";

function Login() {
    return (
        <>
            <Pages id="login" style={{display:"flex", justifyContent:"center", paddingTop:"150px"}}>
                <div style={{width:"50%", height:"40%"}}>
                    <Button type="back-button" w="60px" h="60px" link="/">
                        <img src="src/assets/icon/back-arrow.svg" alt="Back" />
                    </Button>
                    <h1>Login</h1>
                    <FormBox action="login.php" method="POST">
                        <PrimaryInput type="number" placeholder="NIP (18 digit)" name="nip" required />
                        <PrimaryInput type="password" placeholder="Password" name="password" required />
                        <button style={{height:"60px", fontSize:"1.25rem"}} className="button background-gradient" type="submit">Masuk</button>
                    </FormBox>
                    <ButtonGroup position="relative" style={{marginTop:"20px"}}>
                        <Button type="secondary" w="50%" h="100%" link="/login"><p>Login</p></Button>
                        <Button type="secondary" w="50%" h="100%" link="/register"><p>Daftar</p></Button>
                    </ButtonGroup>
                </div>
            </Pages>
        </>
    )
}
export default Login;