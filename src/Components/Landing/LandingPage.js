import React,{ useRef } from 'react'

import Home from "../../Components/Landing/Home";
import About from "../../Components/Landing/About";
import Work from "../../Components/Landing/Work";
import Testimonial from "../../Components/Landing/Testimonial";
import Contact from "../../Components/Landing/Contact";
import Footer from "../../Components/Landing/Footer";
import Reviews from './Reviews';

const LandingPage = ({reviewSectionReference}) => {
  
  return (
    <>
    <div className="App">

          <Home />
          <Work />
          <div ref={reviewSectionReference}>
            <Reviews/>
          </div>
          <About />
          {/* <Testimonial />
          <Contact /> */}
          <Footer />
          
    </div>
    </>
  )
}

export default LandingPage
