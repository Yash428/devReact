import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'
import HomePage from './pages/HomePage.jsx'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'


function App() {

  return (
    <div className='h-screen'>
      <Outlet />
    </div>
  )
}

export default App
