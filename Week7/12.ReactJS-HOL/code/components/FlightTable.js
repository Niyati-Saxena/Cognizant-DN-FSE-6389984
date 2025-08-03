import React from "react";
import FlightDetails from "../FlightDetails";
import './Guestuserpage.css';

// since i want to display the same table in both of my pages therefore 
// creating a single flightTable component and will use this in both of my user pages
// this also shows component reusability in react
function FlightTable({ showBooking }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Flight</th>
          <th>Airline</th>
          <th>Departure</th>
          <th>Status</th>
          {showBooking && <th>Book Ticket</th>}
        </tr>
      </thead>
      <tbody>
        {FlightDetails.map((flight, index) => (
          <tr key={index}>
            <td>{flight.flightNumber}</td>
            <td>{flight.airline}</td>
            <td>{flight.departure}</td>
            <td className={flight.status === "Delayed" ? "status-delayed" : "status-ontime"}>
              {flight.status}
            </td>
            {showBooking && (
              <td>
                <button>Book Now</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FlightTable;
