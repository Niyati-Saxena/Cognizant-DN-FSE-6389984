import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [click, setClick] = useState("book");

  // conditional rendering using if-else
  let content;
  if (click === "book") {
    content = <BookDetails />;
  } else if (click === "blog") {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }
 

  return (
    <>
      <h1>Blogger App</h1>
      <div>
        <button onClick={() => setClick("book")}>Show Books</button>
        <button onClick={() => setClick("blog")}>Show Blogs</button>
        <button onClick={() => setClick("course")}>Show Courses</button>
      </div>
      {content}

      {/* using ternary operator (nested ternary) */}
      {/* { click === "book" ? <BookDetails /> :
        click === "blog" ? <BlogDetails /> : 
        <CourseDetails /> } */}

      {/* using logical AND (&&) operator */}
      {/* {click === "book" && <BookDetails />}
      {click === "blog" && <BlogDetails />}
      {click === "course" && <CourseDetails />} */}

    </>
  );
}

export default App;
