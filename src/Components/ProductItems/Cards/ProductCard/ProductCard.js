import React from "react";
import Logo from "../../../../Assets/Interview.png"
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item,fullitem }) {

  const navigate = useNavigate();
  
  const navigateToSlots = () => {
    var timeslots =  fullitem.timeslots 
    var service =  item.serviceName

    console.log("serviceName : "+item.serviceName)
    console.log("timeslots : "+timeslots[0].dayOfWeek)
    navigate('/slots',{ 
      state: { fullitem,item }
    }
  ); // Replace '/target-page' with your route
  };

  return (
    <div className="productcard">
      <div className="details">
        <div className="big-img">
          <img src={Logo} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{item.serviceName}</h2>
            <span>Rs.{item.price}</span>
          </div>

          <p>Duration : {item.duration} Minutes</p>
          <p>Description : {item.serviceName}</p>

          <button onClick={navigateToSlots} className="cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

