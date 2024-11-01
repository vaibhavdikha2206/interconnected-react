import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import LoginWithGoogleButton from "./LoginWithGoogle/LoginWithGoogleButton";
import LoaderContainer from "../LoaderContainer";

const LoginForm = (props) => {
  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/"); // Replace '/target-page' with your route
  };


  const toggleLoadingState = (loadingState) => {
    setLoading(loadingState);
  };


  function localStorageActions({ loginResponseStore }) {
    console.log(
      "token from loginResponseStore storage " +
        loginResponseStore.response.accessToken
    );
    window.localStorage.setItem("logger", loginResponseStore.loggedIn);
    //window.localStorage.setItem('loginData',loginResponseStore);
    window.localStorage.setItem(
      "loginData",
      JSON.stringify(loginResponseStore)
    );

    console.log("localStorage Logger " + localStorage.getItem("logger"));
    console.log(loginResponseStore);
    // Getting the object
    const storedObject = JSON.parse(localStorage.getItem("loginData"));
    console.log("Stored obj " + storedObject.response.accessToken); // Should log { key: 'value' }

    window.dispatchEvent(new Event("storage"));
  }

  return (
    <LoaderContainer loading={loading}>
      <div className="Logon-Page">
        <div className="parent-login">
          <div className="wrapper">
            <LoginWithGoogleButton
              localStorageActions={localStorageActions}
              navigateToHome={navigateToHome}
              toggleLoadingState={toggleLoadingState}
              storeToLocalStorage={localStorageActions}
            />
          </div>
        </div>
      </div>
    </LoaderContainer>
  );
};

export default LoginForm;
