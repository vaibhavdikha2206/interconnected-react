import React, { useState, CSSProperties } from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import BannerBackground from "../../Assets/home-banner-background.png";
import { login } from "./api/LoginApiService";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useNavigate } from 'react-router-dom';
import LoginWithGoogleButton from "./LoginWithGoogle/LoginWithGoogleButton";

const LoginForm = (props) => {
  const [usernameFieldValue, setUsernameFieldValue] = useState("");
  const [passwordFieldValue, setPasswordFieldValue] = useState("");
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#fe9e0d");

  const navigate = useNavigate();
  
  const navigateToHome = () => {
    navigate('/'); // Replace '/target-page' with your route
  };

  const override = {
    display: "block",
    margin: "auto auto",
    borderColor: "#484848",
  };

  // Function to update the text field value
  const handleUsernameFieldValueChange = (event) => {
    setUsernameFieldValue(event.target.value);
  };

  const toggleLoadingState = (loadingState) => {
    props.toggleLoadingState(loadingState)
  }
  // Function to update the text field value
  const handlePasswordFieldValueChange = (event) => {
    setPasswordFieldValue(event.target.value);
  };

  const handleButtonClickForLogin = async (e) => {
    e.preventDefault(); // Prevent form refresh
    setLoading(true);
    try {
      const loginResponse = await login(usernameFieldValue, passwordFieldValue);     
      const loginResponseStore = {
        loggedIn  : true,
        response : loginResponse
      }

      localStorageActions({loginResponseStore})

      setLoading(false);
      navigateToHome()
    } catch (error) {
      alert("Invalid Entry " + usernameFieldValue);
      console.log(error);
      setLoading(false);
      throw error;
    }
  };

  function localStorageActions({loginResponseStore}){
      console.log("token from loginResponseStore storage "+loginResponseStore.response.accessToken);
      window.localStorage.setItem('logger',loginResponseStore.loggedIn);
      //window.localStorage.setItem('loginData',loginResponseStore);
      window.localStorage.setItem('loginData', JSON.stringify(loginResponseStore));

      console.log("localStorage Logger "+localStorage.getItem('logger'));
      console.log(loginResponseStore);
      // Getting the object
      const storedObject = JSON.parse(localStorage.getItem('loginData'));
      console.log("Stored obj "+storedObject.response.accessToken); // Should log { key: 'value' }
      
      window.dispatchEvent(new Event("storage"));
  }
  
  return (
      <div className="Logon-Page">
        
        {/* <div className="home-container">
          <div className="home-banner-container">
            <div className="home-bannerImage-container">
              <img src={BannerBackground} alt="" />
            </div>
          </div>
        </div> */}

        <div className="parent-login">


          <div className="wrapper">
            <LoginWithGoogleButton localStorageActions={localStorageActions} navigateToHome={navigateToHome} toggleLoadingState={toggleLoadingState} storeToLocalStorage={localStorageActions}/>

            
          {/*             
            <form onSubmit={handleButtonClickForLogin}>
            
              <h1>Login</h1>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={handleUsernameFieldValueChange}
                  required
                />
                <FaUser className="icon" />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Password"
                  onChange={handlePasswordFieldValueChange}
                  required
                />
                <FaLock className="icon" />
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a href="#">Forgot Password?</a>
              </div>

              <button>Login</button>
            
              <div className="register-link">
                <p>
                  Don't have an account ? <a href="#">Register</a>
                </p>
              </div>
            </form> */}


          </div>
          
        </div>
      </div>
    
  );
};

export default LoginForm;
