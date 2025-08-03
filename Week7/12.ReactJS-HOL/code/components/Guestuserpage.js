import React, { useState } from "react";
import FlightTable from "./FlightTable";
import LoggedInUserPage from "./LoggedInUserPage";

function Guestuserpage() {
    const [login , setlogin] = useState(false);

    // conditional rendering using if
    if (login) {
        return <LoggedInUserPage/>
    } 

    return (
    <>
        <h1 style = {{textAlign : "center"}}>Welcome Guest User!</h1>
        <h2 style = {{ textAlign : "center"}}>Flight Details :-</h2>
        <FlightTable showBooking={false}/>
        <h3 style = {{textAlign : "center"}}>Already a User ?</h3>
        <div  style = {{textAlign : "center"}}>
        <button onClick={()=>{setlogin(true)}}>Log In</button>
        </div>
    </>
  );
}

export default Guestuserpage;
