import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import OneProject from './Pages/OneProject'
import UpdateProject from './Pages/UpdateProject'

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

function App() {
 

  return (
 
      <div>
       <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/oneProject/:id' element={<OneProject/>}/>
          <Route path='/updateProject' element={<UpdateProject/>}/>
        </Routes>
       </Router>
      </div>
    
  
  )
}

export default App
