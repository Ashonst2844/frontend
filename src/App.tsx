import MainPage from './assets/ui/layout/MainPage'
import Sidebar from './assets/ui/layout/Sidebar'
import Pages from './assets/ui/layout/Pages'

import React from 'react'
import './App.css'

function App() {
  const [initiate, setInitiate] = React.useState(false)

  let data = {
    avatar: 'default.png',
    nama: 'Nama Guru',
    nip: '01234567-201010-1-001'
  }

  return (
    <>
      <Sidebar avatar={`/avatar/${data.avatar}`} nama={data.nama} nip={data.nip} />
      <MainPage>
        <Pages id='home' className='center'>
          <h1>Hallo, Bapak/Ibu:</h1><span className='background-gradient' style={{
            opacity:"1",
            padding:"10px",
            fontSize:"2rem",
            fontWeight:"700",
            borderRadius:"10px"
          }}>{data.nama}</span>
          <p style={{margin:"20px 0"}}>Selamat dan semangat untuk mengajar.</p>
        </Pages>
      </MainPage>
    </>
  )
}
export default App
