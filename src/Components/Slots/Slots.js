import React,{useEffect} from "react";
import "./Slots.css";
import SlotCard from "../ProductItems/Cards/SlotCard/SlotCard";
import { useLocation } from 'react-router-dom';

export default function Slots() {
  
  const location = useLocation();
  const { fullitem,item } = location.state || {};
  
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Timeslots:'+fullitem.timeslots[0].dayOfWeek);
    console.log('Service:'+item.serviceName);
    console.log('fullitem :',fullitem);
  }, [location]);

  return (
    <div className="slots-section-top">
      <div className="slots-headings-section">
        <h1 className="primary-heading">T  B D {item.serviceName}</h1>
        <p className="primary-subheading">{fullitem.name}</p>
        <p className="primary-subheading">{fullitem.organization}</p>
      </div>
      {fullitem.timeslots.map((slot) => (
        <SlotCard slotData={slot} />
      ))}
    </div>
  );
}

