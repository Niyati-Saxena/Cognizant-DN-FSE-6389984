const indianPlayers = [
  "Sachin1",
  "Dhoni2",
  "Virat3",
  "Rohit4",
  "Yuvaraj5",
  "Raina6"
];

const [first , second , third , fourth , fifth , sixth ] = indianPlayers;

const T20Players = ["First Player" , "Second Player" , "Third Player"];
const RanjiTrophyPlayers = ["Fourth Player" , "Fifth Player" , "Sixth Player"];
const mergedIndianPlayers = [...T20Players , ...RanjiTrophyPlayers];


function ListofIndianPlayers() {
    return (
        <>
        <h1>Odd Players</h1>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fivth : {fifth}</li>

        <hr/>

        <h1>Even Players</h1>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : "{sixth}</li>

        <hr/>

        <h1>List of Indian Players Merged</h1>
        {mergedIndianPlayers.map((item)=> <li>Mr. {item}</li> )}
        </>
    )
}

export default ListofIndianPlayers;
