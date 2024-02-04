// App.js

import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Hospital from "./Hospital";
import Doctors from "./Doctors";
import Bloodbank from "./BloodBank";
import Ambulance from "./Ambulance";
import CitySelection from "./CitySelection";

import "./App.css";
import "./index.css";
import UserAuthentication from "./UserAuthentication";
import KolkataHospital from "./KolkataHospital";

const App = () => {
  const [active, setActive] = useState("");
  function clickMenu(menu) {
    setActive(menu);
  }
  const hospitalData = {
    name: "Sample Hospital",
    women: 150,
    men: 120,
    totalPatients: 270,
    doctors: 15,
    payout: 50000,
    appointment: "Available",
  };

  return (
    <div className="app-container">
      <div className="dashboard">
      <Dashboard  clickMenu={clickMenu} />
      </div>
      <div className="content-container">
        {active === "hospital" && <Hospital {...hospitalData} />}
        {active === "hospital" && <CitySelection clickMenu={clickMenu}/>}
        {active === "doctors" && <Doctors />}
        {active === "bloodbank" && <Bloodbank />}
        {active === "ambulance" && <Ambulance/>}
        {active==="userProfile"&& <UserAuthentication/>}
        {active==="Kolkata"&& <KolkataHospital />}
      </div>
      
     
      
    </div>
  );
};

export default App;
