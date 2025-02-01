import React from "react";
import { useState } from "react";
import { createOrderApi } from "./PaymentApi";
import { confirmOrderApi } from "./PaymentApi";
import { razorPayKey } from "../../tokenConst";
import { useNavigate } from "react-router-dom";
import LoginPopup from "../Login/LoginPopup";

const PaymentButton = ({ expertId, item, slotData, price }) => {
  const navigate = useNavigate();

  const navigateToSuccess = () => {
    navigate("/success"); // Replace '/target-page' with your route
  };

  const navigateToFailure = () => {
    navigate("/failure"); // Replace '/target-page' with your route
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleRestrictedAction = () => {
    // Show the dialog when the user tries to access restricted content
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setIsDialogOpen(false);
  };
  const handleLogin = () => {
    // Simulate login logic (e.g., redirect or perform login)
    setIsDialogOpen(false);
    navToLoginPage();
  };

  const checkIfLoggedIn = () => {
    const storedObject = JSON.parse(localStorage.getItem("loginData"));
    if (storedObject != null) return true;
    else return false;
  };

  const navToLoginPage = () => {
    navigate("/login");
  };

  const handlePayment = async () => {
    if(checkIfLoggedIn()){
    //if (true) {
      //const order = await axios.post('/create-order', { amount: 500 }); // 500 INR
      console.log("payment");
      console.log(slotData);

      const serviceTimeslot = slotData.date + "T" + slotData.startTime;
      console.log("service id " + item.id);
      console.log("expert id " + expertId);
      console.log(serviceTimeslot);

      // make api call to back end and get order id

      try {
        const result = await createOrderApi(item.id, expertId, serviceTimeslot);
        console.log("Result is " + result);

        // pass the recieved orderid
        const options = {
          key: razorPayKey,
          amount: price,
          currency: "INR",
          name: "Test Company",
          description: "Test Transaction",
          order_id: result.razorpayOrderId,
          handler: async (response) => {
            // Handle success, like sending payment details to your backend
            // get razorpay_payment_id and send order confirmation to back end
            try {
              const confirmationOrder = await confirmOrderApi(
                response.razorpay_payment_id
              );
              console.log(confirmationOrder);
              navigateToSuccess();
            } catch (error) {
              console.log(error);
              navigateToFailure();
            }
          },

          modal: {
            escape: false,
            ondismiss: function () {
              // code here
              navigateToFailure();
            },
          },
          notes: {
            address: "Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new window.Razorpay(options);
        // rzp1.on("payment.failed", function (response) {
        //     alert(response.error.code);
        //     rzp1.close();
        //   });

        rzp1.open();
      } catch (error) {
        navigateToFailure();
        console.error("Error fetching data:", error);
      }
    } else {
      // navigate to login screen
      handleRestrictedAction();
      console.log("First Login");
    }
  };

  return (
    <div>
      <button onClick={() => handlePayment()}>Pay Now</button>;
      {/* Call the Popup Dialog */}
      <LoginPopup
        open={isDialogOpen}
        onClose={handleCloseDialog}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default PaymentButton;
