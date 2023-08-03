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
    <section className="post-section">
      <article className="post">
        <header className="post-header">
          <h2>{title}</h2>
          <p>By: {username}</p>
        </header>
        <p>{description}</p>
        <div>
          <button>like</button>
          <button>dislike</button>
          [likes]<button>option</button>
        </div>
      </article>
    </section>
  );
}

function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function grabComments() {
      const response = await fetch(
        `http://localhost:3000/api/v1/posts${id}?query=comments&&results=10`
      );
      const data = await response.json();
      console.log(data);

      setComments(data);
    }
    grabComments();
  });

  if (!comments) {
    return (
      <section className="comments-section">
        <p>Loading comments</p>
      </section>
    );
  }
  return (
    <section className="comments-section">
      <form>
        <input></input>
      </form>
      {comments.map((comment) => {
        const [user, commentText, likes] = comment;

        return <Comment key={user} />;
      })}
    </section>
  );
}

function Comment({ user, commentText, likes }) {
  return;
}
export default PostPage;
