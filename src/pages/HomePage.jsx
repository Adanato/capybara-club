import PropTypes from "prop-types";

const Dummy = [
  {
    username: "gort",
    title: "First encounter with Capybara Space",
    description:
      "I love this website. The community is so welcoming and informative.",
    created: "2020",
  },
  {
    username: "capybara_lover",
    title: "Living the Capybara Life",
    description:
      "Absolutely fantastic site! I've learned so much about capybaras here.",
    created: "2021",
  },
  {
    username: "rodentFanatic",
    title: "Deep Dive into Capybara World",
    description:
      "Great resource for capybara enthusiasts. Love the interactive features.",
    created: "2021",
  },
  {
    username: "nature_enthusiast",
    title: "Nature and Capybaras Combined",
    description:
      "This site has the best capybara photos. Highly recommended for nature lovers.",
    created: "2019",
  },
  {
    username: "explorerMike",
    title: "Exploring the Capybara Universe",
    description:
      "The Capybara Space forums are a treasure trove of information. Great community.",
    created: "2018",
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
function Featured() {
  return <h1>Coolest capybara</h1>;
}
//------------------------
// Capy Posts section
//------------------------

function Posts() {
  return Dummy.map((data) => {
    const { username, title, description, created } = data;
    return (
      <Post
        key={username}
        username={username}
        title={title}
        description={description}
        created={created}
      />
    );
  });
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

//------------------------
// Experience Section
//------------------------

export default HomePage;
