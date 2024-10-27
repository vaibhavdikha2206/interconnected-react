import React from 'react';
import axios from 'axios';

const PaymentButton = () => {

  const handlePayment = async () => {
    //const order = await axios.post('/create-order', { amount: 500 }); // 500 INR

    const options = {
      key: 'rzp_test_i0hZsaWSeAtPki', 
      amount: "500",
      currency:"INR",
      name: 'Test Company',
      description: 'Test Transaction',
      order_id: "order_P9JuV8bk0wqKGR",
      handler: (response) => {
        console.log(response);
        // Handle success, like sending payment details to your backend
      },
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <button onClick={handlePayment}>
      Pay Now
    </button>
  );
};

export default PaymentButton;
