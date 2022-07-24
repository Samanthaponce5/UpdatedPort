import './App.css'
import Navbar from './Components/Navbar'
import React, { useRef } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import SideContact from './Components/SideContact'
import Projects from './Components/Projects'

function App() {
  const container = useRef();

  return (
    <div>
      <Navbar container={container}/>
      <SideContact />
      <Home container={container}/>
      <About />
      <Projects container={container} />
    </div>
  )
}

export default App
