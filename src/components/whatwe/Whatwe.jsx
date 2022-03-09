import React from "react";
import "./Whatwe.css";
import Delivery from "../../assets/delivery.png";
import Sale from "../../assets/sale.png";

function Whatwe() {
  return (
    <div className="Whatwe">
        <b>The services we provide you</b>
        <h2>Why Exactly Us?</h2>

        <div className="we_box">
            <div className="box">
                <img src={Sale} alt="Delivery" />    
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, hic.</p>    
            </div> 
            <div className="box">
                <img src={Delivery} alt="Delivery" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, hic.</p>    
            </div>    
            <div className="box">
                <img src={Sale} alt="Delivery" />    
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, hic.</p>    
            </div>    
        </div>
    </div>
  )
}

export default Whatwe;