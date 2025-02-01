import React from "react";
import { motion } from "framer-motion";

function FailurePage() {
  return (
    <div className="container22" style={styles.container}>
      {/* Animated X mark */}
      <motion.div
        style={styles.crossContainer}
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
            stroke="#FF7043"  // Orangish color for failure
            strokeWidth="3"  // Reduced stroke width for smaller cross
            d="M18 18l16 16M18 34l16-16"  // Adjusted path for a smaller cross
          />
        </motion.svg>
      </motion.div>

      {/* Failure Message */}
      <motion.h1
        style={styles.message}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Failure!
      </motion.h1>

      {/* Additional Details */}
      <motion.p
        style={styles.details}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Something went wrong. <br></br>
        Please try again later.
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
    backgroundColor: "#f0f8f5",  // Background color remains the same
    textAlign: "center",
  },
  crossContainer: {
    width: "80px",
    height: "80px",
    border: "4px solid #FF7043",  // Orangish border for failure
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
    color: "#FF7043",  // Orangish color for failure
    marginBottom: "10px",
  },
  details: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default FailurePage;
