import React from "react";
import "./Header.css";
import {FaOpencart} from "react-icons/fa"

function Header() {
  return (
    <div className="Header">
      <div className="header_side">
        <b>Welcome to reading books</b>
        <h2>
          Buy almost all types of books here. You can also sell us any book you
          have. Delivery is free!!!
        </h2>
        <div className="header_btn_block">
          <a href="#!">
            Buy  
            <FaOpencart className="cart_icon"/>
          </a>
          <a href="#!">
            Sell
            <FaOpencart className="cart_icon"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
