const Dummy = [
  {
    username: "gort",
    title: "Capybara Space website",
    description: "I love this website.",
    created: "2020",
  },
];

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
function Featured() {}
//------------------------
// Capy Posts section
//------------------------

function Posts() {
  return Dummy.map((data) => {
    const { username, title, description, created } = data;
    <Post
      username={username}
      title={title}
      description={description}
      created={created}
    />;
  });
}

function Post(username, title, description, created) {
  return (
    <div className="post">
      <div className="post-header">
        <h2>{title}</h2>{" "}
        <span>
          Author: {username} Date: {created}{" "}
        </span>
      </div>
      {description}
    </div>
  );
}

//------------------------
// Experience Section
//------------------------

export default HomePage;
