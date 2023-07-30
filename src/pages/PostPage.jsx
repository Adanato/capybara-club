import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
PostPage.propTypes = {
  username: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  created: PropTypes.string,
};
function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <main className="post-page-container">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>Author: {post.author}</p>
    </main>
  );
}

export default PostPage;
