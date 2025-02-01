import React from "react";
import Logo from "../../../../Assets/Interview.png";
import PaymentButton from "../../../Slots/PaymentsButton";

export default function SlotCard({ expertId,item,slotData,serviceName,price }) {
  return (
    <div className="slotcard">
      <div className="details">
        <div className="big-img">
          <img src={Logo} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{serviceName}</h2>
            <span>INR: {price}</span>
          </div>

          <p>Day : {slotData.dayOfWeek}</p>
          <p>Time : {slotData.startTime}</p>

          <div className="button-container">
            <button className="secondary-button">Book Slot</button>
            <PaymentButton expertId={expertId} item={item} slotData={slotData} price={price}/>
          </div>
        </div>
      </div>
    </div>
  );
}
