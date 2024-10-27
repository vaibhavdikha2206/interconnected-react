import React from "react";
import { useNavigate } from 'react-router-dom';

export default function WorkCards({ data }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products'); // Replace '/target-page' with your route
  };

    return (
      <div className="work-section-info">
        <div className="work-section-info" key={data.title}>
          <div className="info-boxes-img-container">
            <img src={data.image} alt="" />
          </div>
          <h2>
            {/* This is a for ensuring the title has only 1 word in every line*/}
            {data.title.split(" ").map((word, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {word}
              </React.Fragment>
            ))}
            
          </h2>
          <p>{data.text}</p>
        </div>
        <button onClick = {handleClick} className="secondary-button">Read More</button>
      </div>
    );
  }