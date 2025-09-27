import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import RegisterPage from './components/RegisterPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App