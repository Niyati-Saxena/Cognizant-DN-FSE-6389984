import ListofIndianPlayers from "./ListofIndianPlayers";
import ListofPlayers from "./ListofPlayers";


// i have defined the entire structure in thier respective component only and not in app.js file
// here i have directly called the component based on the condition
// also i have not used props to pass the array, array was defined inside thier respective component only.

function App() {
   const flag = false;
  if (flag === true) {
    return (
      <ListofPlayers/>
    ) 
  } else {
    return <ListofIndianPlayers/>
  }
}

export default App;
