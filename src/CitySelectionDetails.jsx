import React, { useEffect } from "react";
import "./CitySelectionDetails.css"
import Records from "./CitySelectionDetails.json";
import { useState } from "react";
export default function CitySelectionDetails() {
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
        <div>
        
        <div className="container">
        <table>
            <thead>
                <tr>
                    <th>City Name</th>
                    <th>Superspecialist hospital</th>
                    <th>Govt. hospitals</th>
                    <th>,private hospitals</th>
                    <th>clinics </th>
                </tr>
            </thead>
            <tbody>
                {items.map(record=>{return <tr>
                    

                    <td><a>{record.cityName}</a></td>
                    <td><a>{record.superSpecialistHospitals}</a></td>
                    <td><a>{record.govtHospitals}</a></td>
                    <td><a>{record.privateHospitals}</a></td>
                    <td><a>{record.modeclinics}</a></td>
                </tr> })}
            </tbody>
        </table>
    </div>
    </div>
    );
}