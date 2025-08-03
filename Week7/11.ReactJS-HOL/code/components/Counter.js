import { useState } from "react";

function Counter() {

const [count , setCount] = useState(0);

const incrementCount = () =>{
    setCount(count +1);
}

const sayHello = () =>{
   alert("Hello User!");
}

const decrementCount = () => {
    setCount(count-1);
}

    return (
        <>
        {count} <br/>
        <button onClick={()=> {incrementCount(); sayHello()}}>Increment</button> <br/>
        <button onClick = {decrementCount}>Decrement</button> <br/>
        </>
    )
}

export default Counter;
