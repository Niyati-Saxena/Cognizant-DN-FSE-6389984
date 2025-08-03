import { useState } from "react";

// rupees -> euros
function CurrencyConvertor() {

const[amount , setAmount] = useState(0);

const handleSubmit = ()=> {
    alert(`${amount} Rs. are ${amount*0.0100} Euros`);
}

    return (
        <>
        <h1 style = {{color : "green"}}>Currency Convertor.</h1>
        Amount in Rs.: <input type = "number" onChange = { (e)=>{setAmount(e.target.value)} } /> <br/>
        Currency : <input type = "text" value = "Euro" /> <br/>
        <button onClick = {handleSubmit}>Convert</button>
        </> 
    )
}

export default CurrencyConvertor;
