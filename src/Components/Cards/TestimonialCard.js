import React from "react";
import BannerImage2 from "../../Assets/cropped.png";
import "./ReviewCards.css";
import "../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyles.css";

export default function TestimonialCards({ data }) {
  return (
    <>
      <div className="card">
        <div className="review-image">
          <img
            src={dynamicImages[data.img.replace("../../Assets/", "")]}
            alt=""
            className="review-image-tag"
          />
        </div>
        <div className="review-text-items">
          <p className="review-text-title">{data.name}</p>
          <p>{data.review}</p>
          <button className="secondary-button">Read More</button>
        </div>
      </div>
    </>
  );
}


// Dynamically import images
const importImages = (context) => {
    let images = {};
    context.keys().forEach((item, index) => {
      images[item.replace("./", "")] = context(item);
    });
    return images;
  };
  
  // Adjust the path to match where your images are located
  const dynamicImages = importImages(
    require.context("../../Assets", false, /\.(png|jpe?g|svg)$/)
  );
  