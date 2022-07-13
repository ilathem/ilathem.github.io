import React from 'react';
import '../styles/styles.scss';

function Intro() {

  return (
    <div 
      className="intro-greeting"
    >
      <p className="intro-main">Hi, I'm <span className="standout">Isaiah Lathem</span>,</p>
      <p className="intro-sub">software engineer and a change</p>
    </div>
  )
}

export default Intro;