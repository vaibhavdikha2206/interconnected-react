import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import "../LoginForm.css";
import { login } from "../api/LoginApiService";

const LoginWithGoogleButton = (props) => {


  const handleButtonClickForLogin = async (googleToken) => {
   
    props.toggleLoadingState(true)

    try {
      
      // #123 make api call to backend to run auth
      const loginResponse = await login(googleToken);     

      const loginResponseStore = {
        loggedIn  : true,
        response : loginResponse
      }

      props.storeToLocalStorage({loginResponseStore})

      props.toggleLoadingState(false)

      props.navigateToHome()
    } catch (error) {
      alert("Invalid Entry ");
      console.log(error);
     
      throw error;
    }

   
  };

  const onSuccess = (response) => {
    console.log("Login Success:", response);
    // Use response.credential to get the ID token if needed
    handleButtonClickForLogin(response)
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="centered-container-for-login">
      <h2 style={{ padding: "20px" }}>Login with Google</h2>
        <div style={{ padding: "40px" }}>
          <GoogleLogin onSuccess={onSuccess} onError={onError} />
        </div>
    </div>
  );
};

export default LoginWithGoogleButton;
