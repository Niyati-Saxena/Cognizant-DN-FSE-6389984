import React, { useState } from "react";
import FlightTable from "./FlightTable";
import Guestuserpage from "./GuestUserpage";


function LoggedInUserPage() {
    const [logout , setLogout] = useState(false);

    // conditional rendering using if
    if (logout) {
        return <Guestuserpage/>
    }
  return (
    <>
     <h1 style = {{textAlign : "center"}}>Welcome Logged In User!</h1>
     <h2 style = {{ textAlign : "center"}}>You Can Book the Following Flights :-</h2>
     <FlightTable showBooking={true}/>
     <h3 style = {{textAlign : "center"}}>Want to Log Out ? </h3>
     <div style = {{textAlign : "center"}} >
     <button onClick = {()=>{setLogout(true)}} >Log Out</button>
     </div>
    </>
  );
}

export default LoggedInUserPage;
