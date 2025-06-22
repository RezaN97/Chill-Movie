// import { useState } from 'react'
import Home from './component/Home.jsx'
import SignIn from './component/SignIn.jsx'
import SignUp from './component/SignUp.jsx'
import DaftarSaya from './component/Content/DaftarSaya.jsx'
import Profile from './component/Content/Profile.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import NotFound from './component/NotFound.jsx'




function App() {

  

  return (

  <>
  <Router>
    <Routes>
      <Route path='/' element={<SignIn />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/daftarsaya' element={<DaftarSaya />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/notfound' element={<NotFound />}/>
    </Routes>
  </Router>


  {/* <Profile /> */}
    {/* <SignIn/> */}
    {/* <SignUp /> */}
    {/* <ListFilm /> */}
      {/* <Home /> */}
    {/* <DaftarSaya/> */}



    </>
  )
}

export default App

