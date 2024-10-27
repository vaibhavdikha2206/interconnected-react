import React from 'react';
import './UserProfile.css';
import '../../App.css'
import Image from "../../Assets/testimg7.png";
import ProductCard from "../ProductItems/Cards/ProductCard/ProductCard"
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';


const handleClick = () => {
  alert("clicked")
};

export default function  UserProfile() {

  //const [profileData, setProfileData] = useState({});
  const location = useLocation();
  const { user } = location.state || {};

  const { pathname } = useLocation();

  useEffect(() => {
    async function fetchProfileData() {
      window.scrollTo(0, 0);
      console.log("from prev screen "+user.organization)
    }

    fetchProfileData();
  }, []);

  return (
    <div>
    <div className="profile-container">
      <div className="profile-image-section">
        <img src={Image} alt="Profile" className="profile-image" />
        <h1>{user.name}</h1>
        <p>Company: {user.organization}</p>
        <p>Tech Stack: {user.skills}</p>
      </div>

      <div className="profile-text">
        <p>{user.otherDetails}</p>
        <p className="price">
           Rs.{user.price}
        </p>
        <div className="margindiv">
          <button onClick={handleClick} className="secondary-button">Book Now</button>
        </div>
      </div>
    </div>
      {
        user.services.map((item) => (
          <ProductCard item={item} fullitem={user}/>
        ))
      }
    </div>
  );
}