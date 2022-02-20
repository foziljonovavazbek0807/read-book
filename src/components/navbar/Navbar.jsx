import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
        <div className="Logo">
            <b>READ</b>
            <img src="../../images/web-logo.png" alt="logo"/>
            <b>BOOK</b>
        </div>
        <ul className="Menu">
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">Home</a></li>
        </ul>
    </div>
  )
}

export default Navbar