import React, { useEffect } from 'react'

import { HiMoon } from 'react-icons/hi'
import { HiOutlineSun } from 'react-icons/hi'
import lightLogo from '../img/light_mode_logo.svg'
import darkLogo from '../img/dark_mode_logo.svg'
import localForage from 'localforage'

export default function Navbar({container}) {
  useEffect(() => {
    localForage.getItem('mode')
    .then((value) => {
      if (value) {
        document.body.classList.add(value)
        document.getElementById('checkbox').checked = true
      }
    })  
    
  }, [])
  let darkModeToggle = () => {
    document.body.classList.toggle('dark')
    localForage.setItem('mode', document.body.classList.value)
    if(document.body.classList.contains('dark')){
      container.current.loadTheme("dark")
    }else{
      container.current.loadTheme("light")
    }
  }
  // let prevScrollpos = window.pageYOffset
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset
  //   if (prevScrollpos > currentScrollPos) {
  //     document.getElementById('navbar').style.top = '0'
  //   } else {
  //     document.getElementById('navbar').style.top = '-60px'
  //   }
  //   prevScrollpos = currentScrollPos
  // }
  return (
    <nav id="navbar" className="effect-4">
      <ul className='logoPlace'>
        <li>
          <a className="logo-a" href="/">
            <img className="logo light" src={lightLogo} />
          </a>
          <a className="logo-a" href="/">
            <img className="logo dark" src={darkLogo} />
          </a>
        </li>
      </ul>
      <ul className="navigation">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects </a>
        </li>
        <li className='toggleLi'>
          <input
            onChange={() => darkModeToggle()}
            type="checkbox"
            className="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <HiMoon className="moon" />
            <HiOutlineSun className="sun" />
            <span className="ball"></span>
          </label>
        </li>
      </ul>

      
    </nav>
  )
}
