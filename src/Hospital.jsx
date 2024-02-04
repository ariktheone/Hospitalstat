// Doctors.js

import React, { useEffect, useState } from "react";
import "./hospital.css";
import HospitalDetailsTable from "./HospitalDetailsTable";

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

const Doctors = ({
  name,
  speciality,
  city,
  totalDoctors,
  experience,
  availability,
  facts = [],
  dropdownOptions1 = [
    { label: "Set mode", value: "" },
    { label: "Offline", value: "Offline" },
    { label: "Online", value: "Online" },
  ],
  dropdownOptions2 = [
    {label:"Select Specialization", value:''},
    { label: "Cardiologist", value: "Cardiologist" },
    { label: "Dermatologist", value: "Dermatologist" },
    { label: "Pediatrician", value: "Pediatrician" },
    { label: "Orthopedic Surgeon", value: "Orthopedic Surgeon" },
    { label: "Psychiatrist", value: "Psychiatrist" },
    { label: "ENT Specialist", value: "ENT Specialist" },
    { label: "Gynecologist", value: "Gynecologist" },
    { label: "Neurologist", value: "Neurologist" },
    { label: "Dentist", value: "Dentist" },
    { label: "Ophthalmologist", value: "Ophthalmologist" },
    { label: "Nutritionist", value: "Nutritionist" },
    { label: "Urologist", value: "Urologist" },
    { label: "Allergist", value: "Allergist" },
    { label: "Rheumatologist", value: "Rheumatologist" },
    { label: "Pulmonologist", value: "Pulmonologist" },
    { label: "Gastroenterologist", value: "Gastroenterologist" },
    { label: "Endocrinologist", value: "Endocrinologist" },
    { label: "Orthodontist", value: "Orthodontist" },
    { label: "Psychologist", value: "Psychologist" },
    { label: "Dietitian", value: "Dietitian" },
    { label: "Hematologist", value: "Hematologist" },
    { label: "Dental Surgeon", value: "Dental Surgeon" },
    { label: "Neonatologist", value: "Neonatologist" },
    { label: "Nephrologist", value: "Nephrologist" },
    { label: "Oncologist", value: "Oncologist" },
    { label: "Physiotherapist", value: "Physiotherapist" },
  ],
}) => {
  const [searchItem, setSearchItem] = useState('');
  const [mode, setMode] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  // ... (add more checkboxes as needed)

  return (
    <div>
      <div className="doctor-container">
        <h2 className="text-sky-200">{name}</h2>
        <div className="doctor-details">
          <p>Speciality: {speciality}</p>
          <p>City: Kolkata{city}</p>
          <p>Total Doctors: {totalDoctors}</p>
          <p>Experience: {experience}</p>
          <p>Availability: {availability}</p>
        </div>
      </div>

      <div className="space-container"></div>

      <div className="additional-container">
        <div className="doctor-fact">
        <div className="grid-item"><h2>56k+ </h2><p>Doctors registered here till now</p></div>
          <div className="grid-item"><h2>2800+</h2> <p>Daily Appointment Booking</p></div>
          <div className="grid-item"><h2>85K+ </h2><p>People benifited by this till now</p></div>
          <div className="grid-item"><h2>240+ </h2><p>Cities covers our fecilities</p></div>
        </div>
      </div>

      <div className="dropdown-container">
        <div className="drop-option">
          <select
            className="dropdown"
            onChange={(e) => {
              setMode(e.target.value);
            }}
          >
            <option value="" selected disabled hidden>
              Set the mode
            </option>
            {dropdownOptions1.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            className="dropdown"
            onChange={(e) => {
              setSpecialization(e.target.value);
            }}
          >
            <option value="" selected disabled hidden >
              Set the specialization
            </option>
            {dropdownOptions2.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="searchBar">
            <form action="">
              <input
                type="text"
                placeholder="search"
                className="searchDoctor"
                onChange={(e) => {
                  setSearchItem(e.target.value);
                }}
              />
            </form>
          </div>
        </div>

        <div className="checkbox-container">
          <label>
            <input
            name="x"
              type="checkbox"
              checked={checkbox1}
              onChange={() => setCheckbox1(!checkbox1)}
            />
            <p>Day</p>
          </label>
          <label>
            <input
            name="x"
              type="checkbox"
              checked={checkbox2}
              onChange={() => setCheckbox2(!checkbox2)}
            />
            <p>Night</p>
          </label>
          <label>
            <input
              name
              type="checkbox"
              onChange={() => setCheckbox1(!checkbox1)}
            />
            <p>Hospital</p>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => setCheckbox2(!checkbox2)}
            />
            <p>Clinic</p>
          </label>
          {/* ... (add more checkboxes as needed) */}
        </div>
      </div>

      <div>
        <HospitalDetailsTable
          searchItem={searchItem}
          mode={mode}
          specialization={specialization}
          checkbox1={checkbox1}
          checkbox2={checkbox2}
          // ... (pass more checkboxes as needed)
        />
      </div>

      <FactsContainer facts={facts} />
    </div>
  );
};

export default Doctors;