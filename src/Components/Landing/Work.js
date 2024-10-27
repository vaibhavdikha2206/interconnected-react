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
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et",
    },
    {
      image: ChooseMeals,
      title: "Expert \nConsultation",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Query Resolution",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
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
