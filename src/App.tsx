import Main from './pages/Main'
import Register from './pages/Register'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'

import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {  
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home/*' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
}
export default App
