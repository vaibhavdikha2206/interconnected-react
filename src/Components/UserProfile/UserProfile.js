import React from "react";
import "./UserProfile.css";
import "../../App.css";
import Image from "../../Assets/testimg7.png";
import ProductCard from "../ProductItems/Cards/ProductCard/ProductCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoaderContainer from "../LoaderContainer";
import { expertDetailsApiService } from "./api/UserProfileApiService";

const handleClick = () => {
  alert("clicked");
};

export default function UserProfile() {
  //const [profileData, setProfileData] = useState({});
  const location = useLocation();
  const { user } = location.state || {};
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();

  const [expertData, setExpertData] = useState({}); // actual list fetched from api
  const [expertDetails, setExpertDetails] = useState({}); // actual list fetched from api

  useEffect(() => {
    async function fetchProfileData() {
      window.scrollTo(0, 0);
      console.log("from prev screen " + user.organization);
      try {
      setLoading(true);
      const result = await expertDetailsApiService(user.id)
      console.log("value in main view " + result);
      setExpertDetails(result);
      setExpertData(result.expert)
      }catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }

    }

    fetchProfileData();
  }, []);

  return (
     <LoaderContainer loading={loading}>
      <div>
        <div className="profile-container">
          <div className="profile-image-section">
            <img src={Image} alt="Profile" className="profile-image" />
            <h1>{expertData.name}</h1>
            <p>Company: {expertData.organization}</p>
            {/* <p>Tech Stack: {user.skills}</p> */}
          </div>

          <div className="profile-text">
            <p>{expertData.otherDetails}</p>
          </div>
        </div>
        {expertData.services && expertData.services.map((item) => (
          <ProductCard item={item} fullitem={expertDetails} />
        ))}
      </div>
     </LoaderContainer>
  );
}
