import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/styles.scss';

function NavBar() {

  const location = useLocation();

  return (
    <div className="navbar">
      <NavLink className={location.pathname === "/" ? 'nav-link selected' : 'nav-link'} to="/">
        Home
      </NavLink>
      <NavLink className={location.pathname === "/about" ? 'nav-link selected' : 'nav-link'} to="/about">
        About
      </NavLink>
      <NavLink className={location.pathname === "/projects" ? 'nav-link selected' : 'nav-link'} to="/projects">
        Projects
      </NavLink>
      <NavLink className={location.pathname === "/contact" ? 'nav-link selected' : 'nav-link'} to="/contact">
        Contact
      </NavLink>
    </div>
  )

}

export default NavBar;