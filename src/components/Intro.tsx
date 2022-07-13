import React from 'react';
import '../styles/intro.scss';

function Intro() {

  return (
    <div 
      className="intro-greeting"
    >
      <p className="intro-main">Hi, I'm <span className="standout">Isaiah Lathem</span>,</p>
      <p className="intro-sub">software engineer</p>
    </div>
  )
}

export default Intro;