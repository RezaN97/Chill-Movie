// import { useState } from 'react'
import Home from './component/Home.jsx'
import Series from './component/Content/Series.jsx'
import Login from './component/Login.jsx'
import Register from './component/Register.jsx'
import DaftarSaya from './component/Content/DaftarSaya.jsx'
import Profile from './component/Content/Profile.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import NotFound from './component/NotFound.jsx'
import { useEffect } from 'react'
import { getAPI } from './service/api/movieAPI.js'

function App() {

  useEffect(() => {
    getAPI()
  }, [])

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
    </Routes>
  </Router>

    </>
  )
}

export default App

