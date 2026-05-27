import Sidebar from '../assets/ui/layout/Sidebar'
import Home from './Home'
import  Dashboard from './Dashboard'
import Schedule from './Schedule'

import { useLocation, useNavigate, Routes, Route } from 'react-router-dom'
import React from 'react'
import '../App.css'

type UserDataType = {
    nama: string;
    nip: string;
    password: string;
    subject: string;
};

function Main() {

    const location = useLocation()
    const navigate = useNavigate()

    const currentUser = location.state?.userData as UserDataType | undefined;
    React.useEffect(() => {
        if (!currentUser) {
            alert("Sesi tidak ditemukan, silakan login kembali.");
            navigate("/login");
        }
    }, [currentUser, navigate]);
    if (!currentUser) return null;

    return (
        <>
            <Sidebar nama={currentUser.nama} nip={currentUser.nip} />
            <div id='main-page'>
				<Routes>
					<Route path='dashboard' element={<Dashboard/>} />
					<Route path='schedule' element={<Schedule/>} />
					<Route path='*' element={<Home nama={currentUser.nama} subject={currentUser.subject}/>} />
				</Routes>
            </div>
        </>
    );
}
export default Main;