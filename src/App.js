import "./App.css";
import LoginForm from "./Components/Login/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Landing/LandingPage";
import Navbar from "./Components/Landing/Navbar";
import Reviews from "./Components/Landing/Reviews";
import { useRef } from "react";
import UserProfile from "./Components/UserProfile/UserProfile";
import ExperList from "./Components/ProductItems/ExpertList/ExperList";
import Slots from "./Components/Slots/Slots";
import React, { useState, CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const reviewSectionReference = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  let [color, setColor] = useState("#fe9e0d");
  
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  let [loading, setLoading] = useState(false);

  const override = {
    display: "block",
    margin: "auto auto",
    borderColor: "#484848",
  };

  // Function to update the text field value
  const toggleLoadingState = (loadingState) => {
    setLoading(loadingState);
  };

  return (
    <Router>
      <div className="parentapp">
        <div className="navbarcontainer">
          <Navbar
            onButtonClick={scrollToSection}
            reviewSectionReference={reviewSectionReference}
          />
        </div>

          <div className="content">
            <Routes>
              <Route path="/">
                <Route
                  index
                  element={
                    <LandingPage
                      reviewSectionReference={reviewSectionReference}
                    />
                  }
                />

                <Route path="login" element={<LoginForm toggleLoadingState={toggleLoadingState}/>} />
                <Route path="whatever" element={<Reviews />} />
                <Route path="products" element={<ExperList toggleLoadingState={toggleLoadingState}/>} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="slots" element={<Slots />} />
              </Route>
            </Routes>
          </div>

      </div>
    </Router>
  );
}

export default App;
