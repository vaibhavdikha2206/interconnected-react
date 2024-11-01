import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

// LoaderContainer Component
const LoaderContainer = ({ loading, children }) => {
  return (
    <div style={containerStyle}>
      {loading ? <Loader /> : children} {/* Show Loader if loading is true, otherwise show children */}
    </div>
  );
};


const override = {
    display: "block",
    margin: "auto auto",
    borderColor: "#484848",
  };

  
// Loader Component
const Loader = () => (
    <PropagateLoader
    color={"#fe9e0d"}
    loading={true}
    cssOverride={override}
    size={15}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
);


const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '100%',
    flex: 1, // Allows the container to expand within flex layouts
  };

const loaderStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
  fontSize: '24px',
  fontWeight: 'bold',
};

export default LoaderContainer;
