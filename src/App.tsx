import Main from './pages/Main'
import Register from './pages/Register'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [user, setUser] = React.useState({avatar : "", nama: "", nip: ""})

  React.useEffect(() => {
  fetch("http://localhost:5000/api/users")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setUser(data[0]);
      }
    })
    .catch((err) => console.error(err));
}, []);
  
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Main nama={user.nama} nip={user.nip} avatar={user.avatar}/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}
export default App
