import React from "react";
// import { ReactDOM } from "react";
import woyibologo from './woyibologo.png';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <div className="header-bar">
        <div className="logo">
          <img src={woyibologo} alt="" />
        </div>
        <nav>
          <ul>
            <li><Link to="/" className=" navlink home">Home</Link></li>
            <li><Link to="/aboutsession" className=" navlink about">About</Link></li>
            <li><Link to="/">Skills</Link></li>
            <li><Link to="">Portfolio</Link></li>
            <li><Link to="/ContactUs">Contact</Link></li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;