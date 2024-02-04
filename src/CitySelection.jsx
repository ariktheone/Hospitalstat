// CitySelection.js

import React, { useState } from "react";
import "./CitySelection.css";
import CitySelectionDetails from "./CitySelectionDetails";

const CitySelection = ({ clickMenu }) => {
  const [selectedCity, setSelectedCity] = useState('');

  // const handleCitySelection = (city) => {
  //   setSelectedCity(city);
  //   onSelectCity(city);
  // };

  return (
    <>
    <div className="city-selection-container">
      <h2>Choose Your City</h2>
      <div className="city-list">
        <div className="city-grid">
          <div className="grid-item"  ><h2>Kolkata </h2><p>The city of joy</p></div>
          <div className="grid-item"><h2>Mumbai</h2> <p>The City that Never Sleeps</p></div>
          <div className="grid-item"><h2>Delhi</h2><p>The Heart of India</p></div>
          <div className="grid-item"><h2>Chennai</h2><p>The Cultural Capital</p></div>
        </div>
      </div>
     
    </div>
     <div>
     <CitySelectionDetails  />
   </div>
   </>
    
    
  );
};

export default CitySelection;
