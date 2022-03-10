import React from "react";
import "./Whatwe.css";
// import Delivery from "../../assets/delivery.png";
// import Sale from "../../assets/sale.png";
// import Pay from "../../assets/pay.png";
import { FcSalesPerformance } from "react-icons/fc";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsCreditCard } from "react-icons/bs";

function Whatwe() {
  return (
    <div className="Whatwe">
      <h5>The services we provide you</h5>
      <h2>Why Exactly Us?</h2>

      <div className="we_box">
        <div className="box">
          <GiDeliveryDrone className="box_icon"/>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            hic.
          </p>
        </div>
        <div className="box">
          <FcSalesPerformance className="box_icon"/>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            hic.
          </p>
        </div>
        <div className="box">
          <BsCreditCard className="box_icon"/>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            hic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whatwe;
