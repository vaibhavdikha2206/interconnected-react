import React, { useState, useEffect } from "react";
import "./ProductItems.css";
import BookNowCard from "../../Cards/BookNowCard";
import { expertListApiService } from "./ExpertListApiService";
import LoaderContainer from "../../LoaderContainer";

function ExperList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expertList, setExpertList] = useState([]); // actual list fetched from api
  const [loading, setLoading] = useState(false);

  //console.log(product_card); // mocked

  useEffect(() => {
    // Simulate an async operation
    const fetchData = async () => {
      setLoading(true);
      fetchExpertData();
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

  // Helper function for skills search
  const searchInSkills = (skills, searchTerm) => {
    const curatedSearch = skills
      .map((skill) => skill.name)
      .join(", ")
      .toLowerCase();
    if (!skills || !Array.isArray(skills)) return false; // Handle edge cases
    return curatedSearch.toLowerCase().includes(searchTerm.toLowerCase());
  };

  // Helper function for skills search
  const searchInOrg = (org, searchTerm) => {
    return org.toLowerCase().includes(searchTerm.toLowerCase());
  };

  // Helper function for skills search
  const searchInOtherDetails = (otherDetails, searchTerm) => {
    return otherDetails.toLowerCase().includes(searchTerm.toLowerCase());
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
                  (val.organization != null && val.organization.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  searchInOtherDetails(val.otherDetails, searchTerm) ||
                  searchInSkills(val.skills, searchTerm) // Use the helper function here
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
