import React, { useState,useEffect } from "react";
import "./ProductItems.css";
import BookNowCard from "../../Cards/BookNowCard";
import { expertListApiService } from "./ExpertListApiService";
import LoaderContainer from '../../LoaderContainer';
import { product_card, product_card2 } from './product_data';

function ExperList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expertList, setExpertList] = useState([]); // actual list fetched from api
  const [loading, setLoading] = useState(false);

  //console.log(product_card); // mocked



  useEffect(() => {
    // Simulate an async operation
    const fetchData = async () => {
      setLoading(true);
      fetchExpertData()
    };

    fetchData();
  }, []);

  const fetchExpertData = async () => {
    window.scrollTo(0, 0);
    try {
      const result = await expertListApiService();
      console.log("value in main view " + result);
      setExpertList(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoaderContainer loading={loading}>
      <div className="main_content">
        <div style={{ width: "80%" }}>
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
            {expertList
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
      </LoaderContainer>
  );
}

export default ExperList;

