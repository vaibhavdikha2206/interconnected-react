import React from "react";
import Logo from "../../../../Assets/Interview.png";
import PaymentButton from "../../../Slots/PaymentsButton";

export default function SlotCard({ slotData }) {
  return (
    <div className="slotcard">
      <div className="details">
        <div className="big-img">
          <img src={Logo} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>Day : {slotData.dayOfWeek}</h2>
            <span>$ price</span>
          </div>

          <p>Day : {slotData.dayOfWeek}</p>
          <p>Time : {slotData.startTime}</p>

          <div className="button-container">
            <button className="secondary-button">Book Slot</button>
            <PaymentButton/>
          </div>
        </div>
      </div>
    </div>
  );
}
