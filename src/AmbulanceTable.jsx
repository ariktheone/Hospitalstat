import React from "react";
import "./AmbulanceTable.css"
import Records from "./Ambulance.json"
export default function AmbulanceTable(){
    return (
        <>
        
        <div class="container">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hospital</th>
                    <th>AC</th>
                    <th>Contact Number</th>
                    <th>Oxygen Availability</th>
                    <th>Fees</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {Records.map(record=>{return <tr>
                    

                    <td>{record.driverName}</td>
                    <td>{record.affiliatedHospital}</td>
                    <td>{record.acType}</td>
                    <td>{record.contactNumber}</td>
                    <td>{record.oxygenAvailability}</td>
                    <td>{record.fees}</td>
                    <td>{record.feedbackRating}</td>
                </tr> })}
            </tbody>
        </table>
    </div>
    </>
    );
}