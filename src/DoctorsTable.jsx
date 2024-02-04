import React, { useEffect } from "react";
import "./DoctorsTable.css"
import Records from "./DoctorsTable.json";
import { useState } from "react";
export default function DoctorsTable({ searchItem, mode, specialization }) {
    const [items, setItems] = useState(Records);
  
    useEffect(() => {
      if (!Records) return;
      const filteredItems = Records.filter(
        (record) =>
          record.name.toLowerCase().includes(searchItem.toLowerCase()) &&
          record.mode.toLowerCase().includes(mode.toLowerCase())&&
          record.specialization.toLowerCase().includes(specialization.toLowerCase())
      );
  
      setItems(filteredItems);
    }, [searchItem, mode, specialization, Records]);
    return (
        <>
        
        <div class="container">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Specialization</th>
                    <th>Hospital Clinic</th>
                    <th>Fees</th>
                    <th>Visiting hours</th>
                    <th>Mode</th>
                </tr>
            </thead>
            <tbody>
                {items.map(record=>{return <tr>
                    

                    <td>{record.name}</td>
                    <td>{record.specialization}</td>
                    <td>{record.hospitalClinic}</td>
                    <td>{record.fees}</td>
                    <td>{record.visitingHours}</td>
                    <td>{record.mode}</td>
                </tr> })}
            </tbody>
        </table>
    </div>
    </>
    );
}