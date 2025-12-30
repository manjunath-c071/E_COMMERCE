import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/about/Aboutpage'
import ContactPage from './pages/Contact/ContactPage'

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
    <header>
    <Navbar />
    </header>

    <main>
    <Outlet />
    </main>

    <footer>
    <Footer />
    </footer>

    </>
  )
}

export default App
