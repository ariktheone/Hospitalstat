import React, { useEffect } from "react";
import "./KolkataHospitalTable.css"
import Records from "./CitySelectionDetails.json";
import { useState } from "react";
export default function KolkataHospitalTable() {
    const [items, setItems] = useState(Records);
  
    // useEffect(() => {
    //   if (!Records) return;
    //   const filteredItems = Records.filter(
    //     (record) =>
    //       record.name.toLowerCase().includes(searchItem.toLowerCase()) &&
    //       record.mode.toLowerCase().includes(mode.toLowerCase())&&
    //       record.specialization.toLowerCase().includes(specialization.toLowerCase())
    //   );
  
    //   setItems(filteredItems);
    // }, [searchItem, mode, specialization, Records]);
    return (
        <>
        
        <div className="container">
        <table>
            <thead>
                <tr>
                    <th>Hospital Name</th>
                    <th>Total Doctors</th>
                    <th>Total Beds</th>
                    <th>Hospital Type</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {items.map(record=>{return <tr>
                    

                    <a><td>{record.hospitalName}</td></a>
                    <a><td>{record.totalDoctors}</td></a>
                    <a><td>{record.totalBeds}</td></a>
                    <a><td>{record.hospitalTyp}</td></a>
                    <a><td>{record.address}</td></a>
                </tr> })}
            </tbody>
        </table>
    </div>
    </>
    );
}