import React from "react";
import PickMeals from "../../Assets/pick-meals-image.png";
import ChooseMeals from "../../Assets/choose-image.png";
import DeliveryMeals from "../../Assets/delivery-image.png";
import AboutBackground from "../../Assets/about-background.png";
import WorkCards from "../Cards/WorkCards";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Interview Preparation",
      text: "Be better prepared for your upcoming interviews by consulting actual employees",
    },
    {
      image: ChooseMeals,
      title: "Expert \nConsultation",
      text: "Consult an expert on the topic of your choice",
    },
    {
      image: DeliveryMeals,
      title: "Query Resolution",
      text: "Have a query ? Get it resolved from the best in the game",
    },
  ];
  return (
    <div className="work-section-wrapper">
      
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Users sign up, connect with experienced professionals for mock interviews, and receive personalized feedback to improve their performance.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <WorkCards data={data}/>
        ))}
      </div>
    </div>
  );
};

export default Work;
