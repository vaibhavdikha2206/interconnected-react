import { API_BASE_URL } from "../../Constants";
import { accessToken } from "../../tokenConst";

export async function createOrderApi(serviceId,expertId,serviceTimeslot) {
    
    try {

        //const storedObject = JSON.parse(localStorage.getItem("loginData"));
        //var accessToken = storedObject.response.accessToken;
        
        const orderApiBody = {
            serviceId  : serviceId,
            expertId : expertId,
            serviceTimeslot : serviceTimeslot,
            customerEmail: "john.doe@example.com",
          }

        const response = await fetch(`${API_BASE_URL}/api/order/pay`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
            body: JSON.stringify(orderApiBody),
          });

          if (!response.ok) {
            throw new Error("Failed to Create Order data");
          }
          const data = await response.json();
          console.log("Data from Order API " + JSON.stringify(data));
          return data;
    } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }

    
  }


  export async function confirmOrderApi(paymentId) {
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/order/confirm?razorpay_payment_id=${paymentId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
        }
      });

      if (!response.ok) {
        throw new Error("Failed to Create Order data");
      }
      const data = await response.json();
      console.log("Data from Confirmation API " + JSON.stringify(data));
      return data;
    }
    catch (error) {
      console.error("Error Confirming :", error);
      throw error;
    }

  }