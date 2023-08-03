import Posts from "./Post";

import "./Home.css";
function Home() {
  return (
    <main className="home-page-container">
      <Featured />
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

export default Home;
