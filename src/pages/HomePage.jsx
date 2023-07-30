import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function HomePage() {
  return (
    <>
      <Featured />
      <Posts />
    </>
  );
}
//------------------------
// Capy Posts section
//------------------------
function Featured() {
  return;
}
//------------------------
// Capy Posts section
//------------------------

function Posts() {
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch("http://localhost:3000/api/v1/capybara");
      if (!response.ok) {
        console.error(`Received status code ${response.status}`);
        return;
      }
      const data = await response.json();
      setUserPosts(data);
    };

    dataFetch();
  }, []);

  return (
    <div className="posts-section">
      <h1>Posts</h1>
      {userPosts.map((post) => {
        const { username, title, description, created } = post;
        return (
          <Post
            key={username}
            username={username}
            title={title}
            description={description}
            created={created}
          />
        );
      })}
    </div>
  );
}

Post.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  created: PropTypes.string,
};
function Post({ username, title, description, created }) {
  return (
    <div className="post">
      <div className="post-header">
        <h2>{title}</h2>
        <span>
          Author: {username} Date: {created}
        </span>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default HomePage;
