import Pages from "../assets/ui/layout/Pages";
import ButtonGroup from "../assets/ui/layout/ButtonGroup";

import Input from "../assets/ui/components/Input";
import Button from "../assets/ui/components/Button";

import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(Array.from((formData as any).entries())) as {
            nip: string;
            password: string;
        };

        if (!/^[0-9]{18}$/.test(data.nip)) {
            alert("NIP harus terdiri dari 18 digit.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nip: data.nip,
                    password: data.password,
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "NIP atau password salah.");
            }

            alert("Login berhasil. Selamat datang " + result.user.nama);
            navigate("/home", {state: {userData: result.user}});
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Terjadi kesalahan.";
            alert(message);
        }
    };

    return (
        <>
            <Pages id="login" style={{display:"flex", justifyContent:"center", paddingTop:"150px"}}>
                <div className="sign-box">
                    <Button type="back-button" w="60px" h="60px" link="/">
                        <img src="src/assets/icon/back-arrow.svg" alt="Back" />
                    </Button>
                    <h1>Login</h1>
                    <form className="sign-form" onSubmit={handleSubmit} method="POST">
                        <Input type="number" placeholder="NIP (18 digit)" name="nip" required />
                        <Input type="password" placeholder="Password" name="password" required />
                        <button style={{height:"60px", fontSize:"1.25rem"}} className="button background-gradient" type="submit">Masuk</button>
                    </form>
                    <ButtonGroup position="relative" style={{marginTop:"20px"}}>
                        <Button type="secondary" w="50%" h="100%" link="/login"><p>Login</p></Button>
                        <Button type="secondary" w="50%" h="100%" link="/register"><p>Daftar</p></Button>
                    </ButtonGroup>
                </div>
            </Pages>
        </>
    );
}
export default Login;