import React from 'react';
import { 
  FaDownload, 
  FaGithub, 
  FaLinkedinIn,
  FaReact,
  FaJava,
  FaJsSquare,
  FaSass
} from 'react-icons/fa'
import { SiCplusplus, SiC, SiHtml5, SiCss3, SiNodedotjs, SiTypescript } from 'react-icons/si';

import '../styles/about.scss';

function About() {

  return (
    <div className="about-container">
      <div className="about-me-div">
        <h1 className="about-me-header">About Me</h1>
        <p className="about-me-txt">Junior-level developer pursuing a bachelor's in software engineering with a focus in full-stack web development.</p>
        <br />
        <p className="about-me-txt">
          I'm passionate about building beautiful, effective UIs that run on a highly
          maintainable and modifiable codebase for fast feature integration, testing, and 
          technology transfer. 
        </p>
        <br/>
        <ul className="about-me-ul">
          <li className="about-me-li">
            <FaDownload style={{ marginRight: '.5em'}}/>
            Résumé (CV)
          </li>
          <li className="about-me-li">
            <FaDownload style={{ marginRight: '.5em'}}/>
            (Unofficial) College Transcript
          </li>
          <li className="about-me-li" onClick={() => {
            window.open("https://github.com/ilathem", '_blank');
          }}>
            <FaGithub style={{ marginRight: '.5em'}} />
            GitHub
          </li>
          <li className="about-me-li" onClick={() => {
            window.open("https://www.linkedin.com/in/isaiahlathem", '_blank');
          }}>
            <FaLinkedinIn style={{ marginRight: '.5em'}} />
            LinkedIn
          </li>
        </ul>
      </div>
      <div className="skills-div">
        <h2 className="skills-header">Skills</h2>
          <div className="skills-grid">
            <div className="skills-grid-item level-2" id="item1">
              <FaReact className="skills-grid-item-icon"/>
              <br />
              React
            </div>
            <div className="skills-grid-item level-2" id="item2">
              <FaJava className="skills-grid-item-icon"/>
              <br/>
              Java
            </div>
            <div className="skills-grid-item level-2" id="item3">
              <FaJsSquare className="skills-grid-item-icon"/>
              <br />
              JavaScript
            </div>
            <div className="skills-grid-item level-1" id="item4">
              <SiCplusplus className="skills-grid-item-icon"/>
              <br />
              C++
            </div>
            <div className="skills-grid-item level-1" id="item5">
              <SiC className="skills-grid-item-icon"/>
              <br />
              C
            </div>
            <div className="skills-grid-item level-2" id="item6">
              <SiHtml5 className="skills-grid-item-icon"/>
              <br />
              HTML
            </div>
            <div className="skills-grid-item level-1" id="item6">
              <SiTypescript className="skills-grid-item-icon"/>
              <br />
              TypeScript
            </div>
            <div className="skills-grid-item level-2" id="item7">
              <SiCss3 className="skills-grid-item-icon"/>
              <br />
              CSS
            </div>
            <div className="skills-grid-item level-1" id="item8">
              <FaSass className="skills-grid-item-icon"/>
              <br />
              SASS
            </div>
            <div className="skills-grid-item level-1" id="item9">
              <SiNodedotjs className="skills-grid-item-icon"/>
              <br />
              Node.js
            </div>
          </div>
      </div>
    </div>
  )

}

export default About;