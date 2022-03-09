import React from "react";
import "./Navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="#!" className="Logo">
        <b>READ</b>
        <img src="../../images/web-logo.png" alt="logo" />
        <b>BOOK</b>
      </a>
      <form action="#!" className="search_input">
        <input type="text" placeholder="Search" />
        <BiSearchAlt2 className="search_icon" />
        <button className="btn_search">
          Search
        </button>
      </form>
    </div>
  );
}

export default Navbar;
