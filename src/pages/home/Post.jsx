import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Post.css";
//------------------------
// Capy Posts section
//------------------------

function Posts() {
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch("http://localhost:3000/api/v1/posts");

      if (!response.ok) {
        console.error(`Received status code ${response.status}`);
        return;
      }
      const data = await response.json();
      setUserPosts(data);
    };

    dataFetch();
  }, []);

  // Visuals
  return (
    <div className="posts-section">
      <h1>Posts</h1>
      {userPosts.map((post) => {
        console.log(post);
        const { username, title, description, _id } = post;
        return (
          <Link key={username} to={`/post/${_id}`}>
            <Post username={username} title={title} description={description} />
          </Link>
        );
      })}
    </div>
  );
}

function Post({ username, title, description }) {
  return (
    <div className="post">
      <div className="post-header">
        <h2>{title}</h2>
        <span>by: {username}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Posts;
