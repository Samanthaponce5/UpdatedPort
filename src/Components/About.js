import React from 'react'
import lightBulb from '../img/lightBlueBulb.svg'
import bulb from '../img/darkModeBulb.svg'
import lightDiamond from '../img/lightDiamond.svg'
import diamond from '../img/darkDiamond.svg'
import lightHeart from '../img/lightModeLove.svg'
import heart from '../img/darkModeLove.svg'
import Resume from './Resume.pdf'

import { SiShopify } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiJirasoftware } from 'react-icons/si'
import { SiRubyonrails } from 'react-icons/si'
import { DiRuby } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiPostman } from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { DiResponsive } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'

export default class About extends React.Component {
  render() {
    return (
      <div id="about" className="page_wrapper">
        <div className="wrap_about">
          <div className='intro_header'>
            <h1>Let Me Introduce Myself : </h1>
            <h2 className='resume_link'>My Resume:  <a href={Resume} target="_blank">Here</a></h2>
          </div>


          <div className="info_wrapper">
            <div class="flex">
              <div className="card card_1">
                <div className="bulbWrapper">
                  <img className="aboutIcon darkAboutICon" src={bulb} />
                  <img className="aboutIcon lightAboutICon" src={lightBulb} />
                </div>
                <h2>Problem Solver</h2>

                <p className="about-intro">
                  Self-motivated and always looking for something new to
                  challenge myself. I love being creative and problem-solving
                  which is why I love web development.
                </p>
              </div>
              <div className="card card_2">
                <div className="heartWrapper">
                  <img className="aboutIcon darkAboutICon" src={heart} />
                  <img className="aboutIcon lightAboutICon" src={lightHeart} />
                </div>
                <h2>Passionate Developer</h2>
                <p className="about-intro">
                  Experienced in both front-end and back-end development. Mainly
                  working with MongoDB, ExpressJS, ReactJS, NodeJS and Liquid
                  but continuously learning new technologies.
                </p>
              </div>
              <div class="flex">
                <div className="card card_3">
                  <div className="diamondWrapper">
                    <img className="aboutIcon darkAboutICon" src={diamond} />
                    <img
                      className="aboutIcon lightAboutICon"
                      src={lightDiamond}
                    />
                  </div>
                  <h2>Determined</h2>
                  <p className="about-intro">
                    My work experience has made me successful working in both
                    teams and self-directed settings providing me with strong
                    skills in decision-making and organization, always
                    determined to get tasks done.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech_task">
            <h2>My Skills and Knowlegde include : </h2>
            <ul>
              <li>
                <span>
                  <SiHtml5 size="3em" />
                </span>
                <span>HMTL</span>
              </li>
              <li>
                <span>
                  <SiCss3 size="3em" />
                </span>{' '}
                <span>CSS</span>
              </li>
              <li>
                <span>
                  <SiJquery size="3em" />
                </span>{' '}
                <span>JQUERY</span>
              </li>
              <li>
                <span>
                  <SiJavascript size="3em" />
                </span>
                <span>JAVASCRIPT</span>
              </li>
              <li>
                <span>
                  <SiReact size="3em" />
                </span>
                <span>REACTJS</span>
              </li>
              <li>
                <span>
                  <SiRedux size="3em" />
                </span>
                <span>REDUX</span>
              </li>
              <li>
                <span>
                  <SiNextdotjs size="3em" />
                </span>
                <span>NEXTJS</span>
              </li>
              <li>
                <span>
                  <SiTypescript size="3em" />
                </span>
                <span>TYPESCRIPT</span>
              </li>
              <li>
                <span>
                  <DiRuby size="3em" />
                </span>
                <span>RUBY</span>
              </li>
              <li>
                <span>
                  <SiRubyonrails size="3em" />
                </span>
                <span>RUBY ON RAILS</span>
              </li>
              <li>
                <span>
                  <IoLogoNodejs size="3em" />
                </span>
                <span>NODEJS</span>
              </li>
              <li>
                <span>
                  <SiMongodb size="3em" />
                </span>
                <span>MONGODB</span>
              </li>
              <li>
                <span>
                  <SiPostgresql size="3em" />
                </span>
                <span>POSTGRESQL</span>
              </li>
              <li>
                <span>
                  <SiMysql size="3em" />
                </span>
                <span>MYSQL</span>
              </li>
              <li>
                <span>
                  <SiJirasoftware size="3em" />
                </span>
                <span>JIRA</span>
              </li>
              <li>
                <span>
                  <SiGithub size="3em" />
                </span>
                <span>GITHUB</span>
              </li>
              <li>
                <span>
                  <FaGitAlt size="3em" />
                </span>
                <span>GIT</span>
              </li>
              <li>
                <span>
                  <SiShopify size="3em" />
                </span>
                <span>SHOPIFY</span>
              </li>
              <li>
                <span>
                  <DiResponsive size="6em" />
                </span>
                <span>RESPONSIVE DESIGN</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
