import '../office.css';

function OfficeObject() {

    const offices = [
        {
            name : "Office 1",
            rent : 45000,
            address : "Lane 1 Street 1"
        } ,
        {
            name : "Office 2",
            rent : 55000,
            address : "Lane 2 Street 2"
        } ,
        {
            name : "Office 3",
            rent : 65000,
            address : "Lane 3 Street 3"
        } ,
        {
            name : "Office 4",
            rent : 75000,
            address : "Lane 4 Street 4"
        }
    ]

    return (
       
       <div className="container">
            <div className= "details" >   
        <h2>Offices That Are Available</h2>
        {offices.map((key)=>{
            return (
            <ul className="card">
                <li>Name of the office : {key.name}</li>
                <li style = {{color : key.rent < 60000 ? "red" : "green" }}>Rent per Month : {key.rent}</li>
                <li>Address : {key.address}</li>
            </ul>
            )
        })}
            </div>
        </div>
       
    )
}

export default OfficeObject;
