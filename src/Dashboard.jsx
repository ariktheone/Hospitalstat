// Dashboard.js

import React from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faHospital, faHandHoldingDroplet, faHeadset, faTruckMedical, faUser } from '@fortawesome/free-solid-svg-icons'
const Dashboard = ({ clickMenu }) => {
  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <a onClick={() => clickMenu("hospital")} className="nav-link hospital">
        <FontAwesomeIcon icon={faHospital} /> <span className="sidebar-text">Hospital</span>
        </a>
        <a onClick={() => clickMenu("doctors")} className="nav-link doctors">
        <FontAwesomeIcon icon={faStethoscope} /> <span className="sidebar-text">Doctors</span>
        </a>
        <a onClick={() => clickMenu("bloodbank")} className="nav-link blood-bank">
        <FontAwesomeIcon icon={faHandHoldingDroplet} /> <span className="sidebar-text">Blood Bank</span>
        </a>
        <a  onClick={()=>clickMenu("ambulance")} className="nav-link ambulance">
        <FontAwesomeIcon icon={faTruckMedical} /> <span className="sidebar-text">Ambulance</span>
        </a>
        <a onClick={()=>clickMenu("userProfile")} className="nav-link user-profile">
        <FontAwesomeIcon icon={faUser} /><span className="sidebar-text">User Profile</span>
        </a>
       
      </nav>
      <div className="main-content">{/* Main content goes here */}</div>
    </div>
  );
};

export default Dashboard;
