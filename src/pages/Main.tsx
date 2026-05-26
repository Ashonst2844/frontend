import MainPage from '../assets/ui/layout/MainPage'
import Sidebar from '../assets/ui/layout/Sidebar'

import { Routes, Route } from 'react-router-dom'
import '../App.css'
import Home from './Home'

type MainProps = {
    initiate: boolean;
    nama: string;
    nip: string;
    avatar: string;
}

function Main({initiate, nama, nip, avatar}: MainProps) {

    return (
        <>
            <Sidebar avatar={`/avatar/${avatar}`} nama={nama} nip={nip} />
            <MainPage>
				<Routes>
					<Route path='/' element={<Home nama={nama} initiate={initiate} />} />
				</Routes>
            </MainPage>
        </>
    )   
}
export default Main;