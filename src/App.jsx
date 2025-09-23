// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App-style.css'
import Home from './pages/Home.jsx'
import Series from './pages/Series.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import DaftarSaya from './pages/DaftarSaya.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'
import Admin from './pages/Admin.jsx'
import Film from './pages/Film.jsx'
import Premium from './pages/premium.jsx'

function App() {


  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/daftarsaya' element={<DaftarSaya />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/notfound' element={<NotFound />}/>
      <Route path='/series' element={<Series />}/>
      <Route path='/film' element={<Film />}/>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/premium' element={<Premium />}/>

    </Routes>
  </Router>

    </>
  )
}

export default App

