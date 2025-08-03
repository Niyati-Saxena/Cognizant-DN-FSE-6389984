function SayWelcome() {

const sayMessage = (message) =>{
    alert(message)
}

    return (
        <>
        <button onClick={()=>{sayMessage("welcome")}}>Say Welcome</button> <br/>
        </>
    )
}

export default SayWelcome;
