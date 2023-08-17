import { useEffect, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "/src/util.js";
import "./Post.css";
//------------------------
// Capy Posts section
//------------------------

function Posts() {
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(`${baseUrl}/api/v1/posts`);

      if (!response.ok) {
        console.error(`Received status code ${response.status}`);
        return;
      }

      const data = await response.json();
      const post_data = data.posts;
      setUserPosts(post_data);
    };

    dataFetch();
  }, []);
  if (!userPosts) {
    return <div>loading</div>;
  }
  // Visuals
  return (
    <div className="posts-section">
      {userPosts.map((post) => {
        console.log(post);
        const {
          username,
          title,
          description,
          _id,
          likes,
          dislikes,
          createdAt,
        } = post;
        return (
          <Post
            key={_id}
            postId={_id}
            username={username}
            title={title}
            description={description}
            likes={likes}
            dislikes={dislikes}
            createdAt={createdAt}
          />
        );
      })}
    </div>
  );
}

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

function prefReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    case ACTIONS.RESET:
      return action.payload.initialState; // <-- Here's the change
    default:
      throw new Error("Reducer received unexpected action");
  }
}

function Post({
  username,
  title,
  description,
  likes,
  dislikes,
  createdAt,
  likeStatus,
  postId,
}) {
  const initialPref = likes.length - dislikes.length;
  const [prefState, prefDispatch] = useReducer(prefReducer, initialPref);
  const [userPreference, setUserPreference] = useState(likeStatus); // 'like', 'dislike', 'none'
  const [prevPreference, setPrevPreference] = useState(likeStatus);
  function handlePreferenceChange(newPreference) {
    if (userPreference === "none") {
      setUserPreference(newPreference);
      prefDispatch({
        type: newPreference === "like" ? ACTIONS.INCREMENT : ACTIONS.DECREMENT,
      });
    } else if (userPreference === newPreference) {
      setUserPreference("none");
      prefDispatch({
        type: ACTIONS.RESET,
        payload: { initialState: initialPref },
      });
    } else {
      setUserPreference(newPreference);
      prefDispatch({
        type: newPreference === "like" ? ACTIONS.INCREMENT : ACTIONS.DECREMENT,
      });
      prefDispatch({
        type: newPreference === "like" ? ACTIONS.INCREMENT : ACTIONS.DECREMENT,
      });
    }
  }

  useEffect(() => {
    async function likeDislike() {
      if (userPreference === prevPreference) {
        return;
      }
      let response;
      if (userPreference === "like") {
        response = await axios.post(
          `${baseUrl}/api/v1/posts/${postId}/likePost?type=${userPreference}`
        );
      } else if (userPreference === "dislike") {
        response = await axios.post(
          `${baseUrl}/api/v1/posts/${postId}/likePost?type=${userPreference}`
        );
      } else if (userPreference === "none") {
        response = await axios.delete(
          `${baseUrl}/api/v1/posts/${postId}/likePost`
        );
      }

      if (response.status === 200) {
        setPrevPreference(userPreference);
      }
      console.log(response.status);
    }
    likeDislike();
  }, [userPreference, postId, prevPreference]);

  const dateObj = createdAt.toLocaleString();
  return (
    <article className="post">
      <Link to={`/post/${postId}`}>
        <header className="post-header">
          <span>
            {username}
            {dateObj.toLocaleString()}
          </span>
          <h3>{title}</h3>
        </header>
        <div className="post-body">
          <p>{description}</p>
        </div>
      </Link>
      <footer>
        <button
          onClick={() => handlePreferenceChange("like")}
          style={userPreference === "dislike" ? { color: "green" } : {}}
        >
          like
        </button>
        <span>{prefState}</span>
        <button
          onClick={() => handlePreferenceChange("dislike")}
          style={userPreference === "dislike" ? { padding: "5px" } : {}}
        >
          dislike
        </button>
        <button>comment</button>
        <button>share</button>
      </footer>
    </article>
  );
}

export default Posts;
