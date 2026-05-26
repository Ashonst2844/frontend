import MainPage from '../assets/ui/layout/MainPage'
import Sidebar from '../assets/ui/layout/Sidebar'

import { Routes, Route } from 'react-router-dom'
import React from 'react'
import '../App.css'
import Home from './Home'

type MainProps = {
    initiate: boolean;
}

function Main({initiate}: MainProps) {
    const [data, setData] = React.useState({
        avatar: 'default.png',
        nama: '(Silahkan Login)',
        nip: '01234567-201010-1-001'
    })

    return (
        <>
            <Sidebar avatar={`/avatar/${data.avatar}`} nama={data.nama} nip={data.nip} />
            <MainPage>
				<Routes>
					<Route path='/' element={<Home nama={data.nama} initiate={initiate} />} />
				</Routes>
            </MainPage>
        </>
    )   
}
export default Main;