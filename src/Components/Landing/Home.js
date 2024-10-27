import React from "react";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage2 from "../../Assets/cropped.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-banner-container">

        <div className="home-text-section">
        <h1 className="primary-heading-custom">
            Interactions / Interviews &
            Experiences
          </h1>
          <p className="primary-text-custom">
            Have Mock Practice Interviews with people from within your target company / Resume Consultation and Experience Sharing Interactions with experts .
          </p>
          <button className="secondary-button">
            Claim Now <FiArrowRight />{" "}
          </button>
        </div>

        <div className="home-image-section-custom">
          <img src={BannerImage2} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
