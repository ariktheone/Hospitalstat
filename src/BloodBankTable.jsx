import React from "react";
import "./bloodbanktable.css";
import Records from "./BloodType.json";
import { useState, useEffect } from "react";



const BloodBankTable = ({bloodType}) => {
  const [items, setItems] = useState(Records);
  
    useEffect(() => {
      if (!Records) {
        
        return;
      }
      if(bloodType==''){
        setItems(Records);
        return;
      } 
      const filteredItems = Records.filter(
        (record) =>
          record.bloodType.toLowerCase()==bloodType.toLowerCase()
      );
  
      setItems(filteredItems);
    }, [bloodType]);

  return (
    <div className="container">
      <table style={{ margin: "auto" }}>
        <thead>
          <tr >
            <th rowSpan="2">Blood Type</th>
            <th rowSpan="2">Bag Count</th>
            <th colSpan="3" className="Detailsofblood">Details</th>
          </tr>
          <tr >
            <th>Hospital / Blood Bank</th>
            <th>Fees</th>
            <th>Collecting Hours</th>
          </tr>
        </thead>
        <tbody>
          {items.map((record) => (
            <React.Fragment key={record.id}>
              <tr>
                <td rowSpan={record.details.length}>{record.bloodType}</td>
                <td rowSpan={record.details.length}>{record.bagCount}</td>
                <td>{record.details[0].hospitalOrBloodBank}</td>
                <td>{record.details[0].fees}</td>
                <td>{record.details[0].collectingHours}</td>
              </tr>
              {record.details.slice(1).map((detail, index) => (
                <tr key={index}>
                  <td>{detail.hospitalOrBloodBank}</td>
                  <td>{detail.fees}</td>
                  <td>{detail.collectingHours}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodBankTable;
