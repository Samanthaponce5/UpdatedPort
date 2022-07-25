import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { RiHome2Line } from 'react-icons/ri'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineProject } from 'react-icons/ai'
import lightLogo from '../img/light-mode-mobile.svg'
import darkLogo from '../img/dark-mobile-logo.svg'

export default class SideContact extends React.Component {
  render() {
    return (
      <div className="contact-links">
        <div className="items">
          <div className="item-block">
            <div className="">
              <a
                data-w-id="c927e575-4ac5-32c5-7cd2-f40536c94b04"
                href="https://www.linkedin.com/in/samantha-ponce-0bb6ba1a9/"
                target="_blank"
                className="nav-item-linkedin w-inline-block"
              >
                <BsLinkedin />
              </a>
            </div>

            <div className="">
              <a
                href="mailto:samanthaponce5@gmail.com"
                className="nav-item-email w-inline-block"
              >
                <MdOutlineAlternateEmail />
              </a>
            </div>
            <div className="">
              <a
                href="https://www.instagram.com/samantha_pnce/"
                target="_blank"
                className="nav-item-instagram w-inline-block"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
         
          <div className="item-block menu">
            <div className="">
              <a
                href="#"
                className="w-inline-block"
              >
                <RiHome2Line size="1.4em" />
              </a>
            </div>
            <div className="">
              <a
                href="#about"
                className="w-inline-block"
              >
                <BsPerson size="1.5em" />
              </a>
            </div>
            <div className="">
              <a
                href="#projects"
                className="w-inline-block"
              >
                <AiOutlineProject size="1.4em" />
              </a>
            </div>
          </div>
          <div className="item-block logo-side">
              <a className="logo-a" href="/">
                <img className="logo light" src={lightLogo} />
              </a>
              <a className="logo-a" href="/">
                <img className="logo dark" src={darkLogo} />
              </a>
          </div>
        </div>
      </div>
    )
  }
}
