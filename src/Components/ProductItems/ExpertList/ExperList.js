import React, { useState } from "react";
import "./ProductItems.css";
import product_card from "./product_data";
import BookNowCard from "../../Cards/BookNowCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { expertListApiService } from "./ExpertListApiService";
import PropagateLoader from "react-spinners/PropagateLoader";

function ExperList(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expertList, setExpertList] = useState({}); // actual list fetched from api
  var status = "active"

  const override = {
    display: "block",
    margin: "auto auto",
    borderColor: "#484848",
  };

  console.log(product_card); // mocked

  const toggleLoadingState = (loadingState) => {
    props.toggleLoadingState(loadingState);
  };



  useEffect(() => {
    if (status === "active") {
      status="inactive"
      toggleLoadingState(true);
      fetchExpertData();
      return () => { 
        console.log("Cleanup on unmount");
      };
    }
  }, [status]); // Empty dependency array ensures this only runs once

  const fetchExpertData = async () => {
    window.scrollTo(0, 0);
    try {
      // const result = await expertListApiService(toggleLoadingState);
      // console.log("value in main view " + result);
      // setExpertList(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    finally{
      setTimeout(() => {
       
        toggleLoadingState(false)
        
      }, 2000); // 2000ms = 2 seconds
    }
  };

  // useEffect(() => {
  //   const fetchExpertData = async () => {
  //     window.scrollTo(0, 0);
  //     props.toggleLoadingState(true);
  //     try {
  //       const result = await expertListApiService();
  //       console.log("value in main view " + result);
  //       setExpertList(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //       console.error("Setting False yo ho");
  //       props.toggleLoadingState(true);
  //     }
  //   };

  //   fetchExpertData();
  // }, [pathname]);

  return (
    <div className="main_content">
      <div>
        <div className="main_content">
          <div className="product-form-container">
            <input
              type="text"
              placeholder="Tech Stack / Company"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="main_content">
          {product_card
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.otherDetails
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <BookNowCard user={item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ExperList;
