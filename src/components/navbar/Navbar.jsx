import React from "react";
import "./Navbar.css";
import { FaSignInAlt } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';

function Navbar() {
  return (
    <div className="Navbar">
        <a href="#!" className="Logo">
            <b>READ</b>
            <img src="../../images/web-logo.png" alt="logo"/>
            <b>BOOK</b>
        </a>
        <form action="#!" className="search_input">
          <input type="text" placeholder="Search" />
          <IoIosSearch className="search_icon"/>
        </form>
        <button className="BtnInter">
          <FaSignInAlt className="InterIcon"/>
          <p>Register</p>
        </button>
    </div>
  )
}

export default Navbar;