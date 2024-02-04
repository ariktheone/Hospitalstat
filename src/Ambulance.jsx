// Ambulance.js

import React from "react";
import "./Ambulance.css";  // Make sure to have the corresponding CSS file
import AmbulanceTable from "./AmbulanceTable";  // Make sure to have the corresponding AmbulanceTable component

const FactsContainer = ({ facts }) => (
  <div className="facts-container">
    {facts.map((fact, index) => (
      <div key={index} className="fact">
        <p className="figure">{fact.figure}</p>
        <p className="description">{fact.description}</p>
      </div>
    ))}
  </div>
);

const Ambulance = ({
  name,
  vehicleType,
  medicalEquipment,
  capacity,
  driverName,
  contactNumber,
  facts = [],
  dropdownOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    { label: "Option 4", value: "option4" },
    { label: "Option 5", value: "option5" },
  ],
}) => {
  return (
    <div>
      {/* Container 1 (Similar to Bloodbank) */}
      <div className="ambulance-container">
        <h2 className="text-sky-200">{name}</h2>
        <div className="ambulance-details">
          <p>Vehicle Type: {vehicleType}</p>
          <p>Medical Equipment: {medicalEquipment}</p>
          <p>Capacity: {capacity}</p>
          <p>Driver Name: {driverName}</p>
          <p>Contact Number: {contactNumber}</p>
        </div>
      </div>

      {/* Space between the two containers (Similar to Bloodbank) */}
      {/* <div className="space-container"></div> */}

      {/* Container 2 (Similar to Bloodbank) */}
      <div className="additional-container">
        {/* Your 4 columns go here (Similar to Bloodbank) */}
        <div className="ambulance-fact">
        <div className="grid-item"><h2>25k+ </h2><p>Ambulances registered here till now</p></div>
          <div className="grid-item"><h2>1200+</h2> <p>Daily Bookings </p></div>
          <div className="grid-item"><h2>85K+ </h2><p>People benifited by this till now</p></div>
          <div className="grid-item"><h2>180+ </h2><p>Cities covers our fecilities</p></div>
        </div>
      </div>

      <div className="dropdown-container">
        {/* Dropdown Container with Style */}
        <div className="drop-option">
          <select className="dropdown">
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <select className="dropdown">
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox-container">
          <label>
            <input type="checkbox" />
            <p>Checkbox 1</p>
          </label>
          <label>
            <input type="checkbox" />
            <p>Checkbox 2</p>
          </label>
          <label>
            <input type="checkbox" />
            <p>Checkbox 3</p>
          </label>
          <label>
            <input type="checkbox" />
            <p>Checkbox 4</p>
          </label>
        </div>
      </div>

      <div>
        < AmbulanceTable/>
      </div>

      {/* Separate FactsContainer component (Similar to Bloodbank) */}
      <FactsContainer facts={facts} />
    </div>
  );
};

export default Ambulance;
