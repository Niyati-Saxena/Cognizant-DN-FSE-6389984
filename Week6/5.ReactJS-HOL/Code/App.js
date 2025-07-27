import CohortDetails from "./CohortDetails";

const cohortData = [
  {
    cohortName: 'INTADMDF10 - .NET FSD',
    startDate: '22-Feb-2022',
    status: 'Scheduled',
    coach: 'Aathma',
    trainer: 'Jojo Jose'
  },
  {
    cohortName: 'ADM21JF014 - Java FSD',
    startDate: '10-Sep-2021',
    status: 'Ongoing',
    coach: 'Apoorv',
    trainer: 'Elisa Smith'
  },
  {
    cohortName: 'CDBJF21025 - Java FSD',
    startDate: '24-Dec-2021',
    status: 'Ongoing',
    coach: 'Aathma',
    trainer: 'John Doe'
  }
];

function App() {
return (
    <div style={{ padding: '20px' }}>
    
      <h2 style={{ marginBottom: '20px' }}>Cohort Details</h2>

      <CohortDetails cohorts={cohortData} />
    </div>
  );
}

export default App;
