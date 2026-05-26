import Main from './pages/Main'
import Register from './pages/Register'

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [initiate, setInitiate] = React.useState(false)
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Main initiate={initiate}/>} />
        <Route path='/login' element={<Register page="login" initiate={initiate} setInitiate={setInitiate} />} />
        <Route path='/register' element={<Register page="register" initiate={initiate} setInitiate={setInitiate} />} />
      </Routes>
    </>
  )
}
export default App
