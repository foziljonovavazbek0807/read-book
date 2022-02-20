import React from "react";
import "./Navbar.css";
import { FaSignInAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="Navbar">
        <a href="#!" className="Logo">
            <b>READ</b>
            <img src="../../images/web-logo.png" alt="logo"/>
            <b>BOOK</b>
        </a>
        <ul className="Menu">
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Home</a></li>
        </ul>
        <button className="BtnInter">
          <FaSignInAlt className="InterIcon"/>
          <p>Register</p>
        </button>
    </div>
  )
}

export default Navbar