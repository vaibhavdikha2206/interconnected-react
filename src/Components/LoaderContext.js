import React, { createContext, useContext, useState } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);


  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
     {loading ? <Loader /> : children} {/* Show Loader component when loading is true, otherwise show children */}

    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  return useContext(LoaderContext);
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