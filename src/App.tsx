import Main from './pages/Main'
import Register from './pages/Register'

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [initiate, setInitiate] = React.useState(false)

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
        <Route path='/' element={<Main initiate={initiate} nama={user.nama} nip={user.nip} avatar={user.avatar}/>} />
        <Route path='/login' element={<Register page="login" initiate={initiate} setInitiate={setInitiate} />} />
        <Route path='/register' element={<Register page="register" initiate={initiate} setInitiate={setInitiate} />} />
      </Routes>
    </>
  )
}
export default App
