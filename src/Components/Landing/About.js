import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Be Ahead of the Game
        </h1>
        <p className="primary-text">
          Connect with real professionals for personalized mock interviews, gaining practical experience and valuable feedback to excel in your next big opportunity
        </p>
        <p className="primary-text">
          Our platform provides the guidance you need to succeed.
        </p>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;
