import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohorts }) {
  return (
    <div>
      {cohorts.map((cohort, index) => {
        const statusClass =
          cohort.status.toLowerCase() === 'ongoing' ? styles.green : styles.blue;

        return (
          <div key={index} className={styles.box}>
            <h3 className={statusClass}>{cohort.cohortName}</h3>
            <p><strong>Started On:</strong> {cohort.startDate}</p>
            <p><strong>Current Status:</strong> {cohort.status}</p>
            <p><strong>Coach:</strong> {cohort.coach}</p>
            <p><strong>Trainer:</strong> {cohort.trainer}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CohortDetails;
