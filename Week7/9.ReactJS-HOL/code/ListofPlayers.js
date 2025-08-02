// array of objects of the player's names and thier scores
const players = [
  { name: "Jack", score: 50 },
  { name: "Michael", score: 70 },
  { name: "John", score: 40 },
  { name: "Ann", score: 61 },
  { name: "Elisabeth", score: 61 },
  { name: "Sachin", score: 95 },
  { name: "Dhoni", score: 100 },
  { name: "Virat", score: 84 },
  { name: "Jadeja", score: 64 },
  { name: "Raina", score: 75 },
  { name: "Rohit", score: 80 }
];

// map() -> used to tranform the data
// filter() -> used to filter the data 
// therefore filter() is a better choice rather than map()
const players70 = players.filter((player)=> {
    return (
        player.score <= 70
    )
})

// component 
function ListofPlayers() {
    return (
        
        <>

        <h1>List of Players</h1>
        {/* map() */}
        {players.map((item) => {
            return ( 
                <div>
                <li>Mr. {item.name}<span> {item.score}</span></li>
                </div>
            )
        })}

        <hr/>

        <h1>List of Players having Score less than 70</h1>
        {/* again using map()  */}
        {players70.map((item) => {
            return ( 
                <div>
                <li>Mr. {item.name}<span> {item.score}</span></li>
                </div>
            )
        })}

        </>
     );
}

export default ListofPlayers;
