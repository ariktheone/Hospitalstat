import React from "react";
import "./CustomerSupportPage.css"; // You can create this CSS file for styling if needed
//import SupportRecords from "./CustomerSupportRecords.json"; // Assuming you have a JSON file with support records

export default function CustomerSupportPage() {
  return (
    <div className="customer-support-container">
      <table className="support-main-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Issue</th>
            <th>Resolution</th>
          </tr>
        </thead>
        <tbody>
          {SupportRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.customerName}</td>
              <td>{record.issue}</td>
              <td>{record.resolution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


