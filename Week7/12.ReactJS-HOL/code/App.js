// import { useState } from "react";
import Guestuserpage from "./components/GuestUserpage";

function App() {
  
  return (
    <>
    <Guestuserpage/>
    </>
  );
}

export default App;

// additional -
// this asks the type of the user at the beginning then show them the page accordingly
// but displays the page just below this 
// to make it appear on a different page we need to use Routing.

// const [userType , setUserType] = useState(null);
{/* <h1>Which Type of User Are you ? </h1>

    <button onClick={()=>{setUserType("guest")}}>Guest User</button>
    <button onClick={()=>{setUserType("loggedin")}}>Logged In User</button>

    {/* conditional rendering using && AND operator */}
    // {userType === "guest" && <Guestuserpage/>}
    // {userType === "loggedin" && <LoggedInUserPage/>} */}
