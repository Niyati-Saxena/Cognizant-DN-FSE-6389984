import React from "react";

function CourseDetails() {

  return (
 
    <div style={styles.container}>
      <h2>Course Details</h2>
      <p><strong>Course:</strong> Frontend Mastery with React</p>
      <p><strong>Instructor:</strong> Sarah Drasner</p>
      <p><strong>Platform:</strong> Egghead.io</p>
      <p><strong>Duration:</strong> 6 weeks</p>
    </div>

  );
}

const styles = {
  container: {
    border: "2px solid #ff9800",
    padding: "16px",
    borderRadius: "8px",
    marginTop: "20px",
  },
};

export default CourseDetails;
