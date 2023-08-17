import Posts from "./Post";

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
  return (
    <>
      <form>
        <h1>Create a post</h1>
        <button>Hello</button>
      </form>
      <CreatePostModal />
    </>
  );
}

function CreatePostModal() {
  return;
}

export default Home;
