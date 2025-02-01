import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import BannerImage2 from "../../Assets/cropped.png";
import "../Cards/ReviewCards.css";
import "../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Cards/SliderStyles.css";
import TestimonialCards from "../Cards/TestimonialCard";

const Reviews = () => {
  return (
    <div className="review-section-wrapper">
      
      <div className="work-section-top">
        <p className="primary-subheading">Users</p>
        <h1 className="primary-heading">How We Are helping ?</h1>
      </div>

      <div className="review-section-container">

        <div className="review-cards">
          <div className="topmargin">
            <Slider {...settings}>
              {data.map((d) => (
                <TestimonialCards data={d} />
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Reviews;


const data = [
  {
    name: "Vaibhav",
    img: `../../Assets/testimg6.png`,
    review: "Helped me stay one step ahead of others.",
  },
  {
    name: "Sabhar",
    img: "../../Assets/testimg7.png",
    review: "Its a must try for interview preparations.",
  },
  {
    name: "Sabhar",
    img: "../../Assets/testimg7.png",
    review: "Kudos to the makers for this great Initiative",
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
