import { useState, useEffect } from "react";
import "./Slots.css";
import SlotCard from "../ProductItems/Cards/SlotCard/SlotCard";
import { useLocation } from 'react-router-dom';
import LoaderContainer from "../LoaderContainer";

export default function Slots() {
  
  const location = useLocation();
  const { timeslots,item,expertId } = location.state || {};
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Service:'+item.serviceName);
  }, [location]);

  return (
    <LoaderContainer loading={loading}>
    <div className="slots-section-top">
      <div className="slots-headings-section">
        <h1 className="primary-heading">{item.serviceName}</h1>
      </div>
      {timeslots.map((slot) => (
        <SlotCard expertId={expertId} item={item} slotData={slot} serviceName={item.serviceName} price={item.price} />
      ))}
    </div>
    </LoaderContainer>
  );
}

