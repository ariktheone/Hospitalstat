// Bloodbank.js

import React, { useState } from "react";
import "./bloodbank.css";
import BloodBankTable from "./BloodBankTable";

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

const Bloodbank = ({
  name,
  bloodTypeA,
  bloodTypeB,
  bloodTypeAB,
  bloodTypeO,
  totalDonors,
  availability,
  facts = [],
  dropdownOptions1 = [
    { label:"BloodType", value:''},
    { label: "A+", value: "A+" },
    { label: "O-", value: "O-" },
    { label: "B+", value: "B+" },
    { label: "AB-", value: "AB-" },
    { label: "A-", value: "A-" },
    { label: "O+", value: "O+" },
    { label: "Duffy", value: "Duffy" },
    { label: "K", value: "K" },
    { label: "Lutheran", value: "Lutheran" },
    { label: "Kidd", value: "Kidd" },
    { label: "Bombay", value: "Bombay" },    
  ]
}) => {
  const [bloodType, setBloodType]=useState('');
  console.log(bloodType);
  return (
    <div>
      {/* Container 1 (Similar to Hospital/Doctor) */}
      <div className="bloodbank-container">
        <h2 className="text-sky-200">{name}</h2>
        <div className="bloodbank-details">
          <p>Blood Type A: {bloodTypeA}</p>
          <p>Blood Type B: {bloodTypeB}</p>
          <p>Blood Type AB: {bloodTypeAB}</p>
          <p>Blood Type O: {bloodTypeO}</p>
          <p>Total Donors: {totalDonors}</p>
          <p>Availability: {availability}</p>
        </div>
      </div>

      {/* Space between the two containers (Similar to Hospital/Doctor) */}
      {/* <div className="space-container"></div> */}

      {/* Container 2 (Similar to Hospital/Doctor) */}
      <div className="additional-container">
        {/* Your 4 columns go here (Similar to Hospital/Doctor) */}
        <div className="bloodbank-fact">
          <div className="grid-item"><h2>150+ </h2><p>Blood Banks registered here</p></div>
          <div className="grid-item"><h2>1000+</h2> <p>Daily tracking of Blood Bags</p></div>
          <div className="grid-item"><h2>15K+ </h2><p>People benifited by this till now</p></div>
          <div className="grid-item"><h2>100+ </h2><p>Cities covers our fecilities</p></div>
        </div>
      </div>

      <div className="dropdown-container">
        {/* Dropdown Container with Style */}
        <div className="drop-option">
          <select className="dropdown" onChange={e=>{setBloodType(e.target.value)}}>
            {dropdownOptions1.map((option, index) => (
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
        <BloodBankTable bloodType={bloodType} />
      </div>

      {/* Separate FactsContainer component (Similar to Hospital/Doctor) */}
      <FactsContainer facts={facts} />
    </div>
  );
};

export default Bloodbank;
