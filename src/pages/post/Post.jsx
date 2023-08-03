// Library imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Component imports

// CSS
import "./Post.css";
function PostPage() {
  return (
    <main className="post-main">
      <Post />
      <Comments />
    </main>
  );
}
function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(`http://localhost:3000/api/v1/posts/${id}`);
      const data = await response.json();
      console.log(data);
      setPost(data.post);
    };
    dataFetch();
  }, [id]);
  console.log(post);
  if (!post) {
    return (
      <section className="post-section">
        <div>Loading...</div>
      </section>
    );
  }
  const { title, description, username } = post;
  return (
    <section className="post-page-section">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>User: {username}</p>
    </section>
  );
}

function Comments() {
  return <section>User comments</section>;
}
export default PostPage;
