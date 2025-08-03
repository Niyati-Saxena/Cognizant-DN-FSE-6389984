import React from "react";

function BookDetails() {

  return (

    <div style={styles.container}>
      <h2>Book Details</h2>
      <p><strong>Title:</strong> React In Action </p>
      <p><strong>Author:</strong> Mark Tielens Thomas</p>
      <p><strong>Genre:</strong> Technology</p>
      <p><strong>Published:</strong> 2018</p>
    </div>
  
  );
}

// inline styling
const styles = {
  container: {
    border: "2px solid #2196f3",
    padding: "16px",
    borderRadius: "8px",
    marginTop: "20px",
  },
};

export default BookDetails;
