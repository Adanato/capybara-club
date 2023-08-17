import Posts from "./Post";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../../util";
import "./Home.css";

function Home() {
  return (
    <main className="home-container">
      <Featured />
      <CreatePost />
      <Posts />
    </main>
  );
}
//------------------------
// Featured section
//------------------------
function Featured() {
  return;
}
function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postDetails = {
      title: title,
      description: description,
    };
    const response = await axios.post(`${baseUrl}/api/v1/posts`, postDetails);
    console.log(response);
  };
  return (
    <>
      <form>
        <header action="/posts" method="post">
          <h1>Create a post</h1>
        </header>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="title"
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="description"
            name="description"
            id="description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input type="submit" value="create" onClick={handleSubmit} />
      </form>
      <CreatePostModal />
    </>
  );
}

function CreatePostModal() {
  return;
}

export default Home;
