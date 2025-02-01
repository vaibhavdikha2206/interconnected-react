import React from "react";
import { motion } from "framer-motion";

function SuccessPage() {
  return (
    <div className="container22" style={styles.container}>
      {/* Animated Checkmark */}
      <motion.div
        style={styles.checkmarkContainer}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
          style={styles.svg}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.path
            fill="none"
            stroke="#4CAF50"
            strokeWidth="4"
            d="M14 27l7 7 17-17"
          />
        </motion.svg>
      </motion.div>

      {/* Success Message */}
      <motion.h1
        style={styles.message}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Success!
      </motion.h1>

      {/* Additional Details */}
      <motion.p
        style={styles.details}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Your Slot has been booked successfully. <br></br>
        Details will be emailed to you shortly .
      </motion.p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    
    backgroundColor: "#f0f8f5",
    textAlign: "center",
  },
  checkmarkContainer: {
    width: "80px",
    height: "80px",
    border: "4px solid #4CAF50",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  svg: {
    width: "50px",
    height: "50px",
  },
  message: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: "10px",
  },
  details: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default SuccessPage;
