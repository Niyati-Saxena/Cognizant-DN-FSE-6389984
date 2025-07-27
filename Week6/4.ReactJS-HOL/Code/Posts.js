import React, { Component } from 'react';
import Post from './Post';

// class based component
class Posts extends Component {
  constructor(props) {

    super(props);

    this.state = {
        posts: [],
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      const postList = data.map(post => new Post(post.id, post.title, post.body));
      this.setState({ posts: postList });
    } 
    catch (error) {
        alert("Error fetching posts: " + error.message);
    }
  };

  // mounting
  componentDidMount() {
     this.loadPosts();
  }
  // handling error
  componentDidCatch(error, info) {
     alert("An unexpected error occurred: " + error);
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>

        {this.state.posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
