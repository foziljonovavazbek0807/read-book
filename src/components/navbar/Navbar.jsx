import React from "react";
import "./Navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="#!" className="logo">
        <b>READ</b>
        <img src="../../images/web-logo.png" alt="logo" />
        <b>BOOK</b>
      </a>
      <form action="#!" className="search_input">
        <input type="text" placeholder="Search" />
        <BiSearchAlt2 className="search_icon" />
        <button>
          Search
        </button>
      </form>
      <GiShoppingCart className="bascket_icon"/>
    </div>
  );
}

export default Navbar;
