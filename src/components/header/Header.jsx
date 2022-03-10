import React from "react";
import "./Header.css";
import { GiShoppingCart } from "react-icons/gi";
import { FcSalesPerformance } from "react-icons/fc";
import BuyBooks from "../../assets/buy-books.png";

function Header() {
  return (
    <div className="Header">
      <div className="header_asset">
        <img src={BuyBooks} alt="BuyBooks" />
      </div>
      <div className="header_side">
        <b>Welcome to reading books</b>
        <h2>
          Buy almost all types of books here. You can also sell us any book you
          have. <br /> Delivery is free!!!
        </h2>
        <div className="header_btn_block">
          <a href="#!">
            Sell
            <FcSalesPerformance className="cart_icon" />
          </a>
          <a href="#!">
            Buy
            <GiShoppingCart className="cart_icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;