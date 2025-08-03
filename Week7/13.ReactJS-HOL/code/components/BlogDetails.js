import React from "react";

function BlogDetails() {
   
  return (

    <div style={styles.container}>
      <h2>Blog Details</h2>
      <p><strong>Title:</strong> React 18 Features That Matter</p>
      <p><strong>Author:</strong> DevLogics</p>
      <p><strong>Posted on:</strong> July 2025</p>
      <p><strong>Tags:</strong> React, JavaScript, Web Development</p>
    </div>

  );
}

// inline styling
const styles = {
  container: {
    border: "2px solid #4caf50",
    padding: "16px",
    borderRadius: "8px",
    marginTop: "20px",
  },
};

export default BlogDetails;
