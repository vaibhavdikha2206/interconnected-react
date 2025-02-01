import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../Assets/testimg7.png";

export default function BookNowCard({ user }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("printing user " + user.organization);
    navigate("/profile", { state: { user } }); // Replace '/target-page' with your route
  };

  return (
    <>
      <div className="card" key={user.id}>
        <div className="">
          <img src={Image} className="review-image-tag2" />
        </div>
        <div className="card_header">
          <h2>yoyo {user.name}</h2>
          <p>{user.otherDetails}</p>
          {user.organization !== undefined ? (
            <p>
              <span className="bold-text">Company : </span>
              {user.organization}
            </p>
          ) : (
            <p>Company : N/A </p>
          )}

          <p>
            <span className="bold-text">Expertise : </span>
            {user.skills.map((skill) => (
              <div key={skill.id}>{skill.name}</div> // Each skill's name will appear on a new line
            ))}
          </p>

          <div onClick={handleClick} className="btn">
            Book Now
          </div>
        </div>
      </div>
    </>
  );
}
