import { useState } from "react";
import "../CSS/AuthPage.css";

function AuthPage() {
  return (
    <main className="auth-page-container">
      <Form></Form>
    </main>
  );
}

function Form() {
  const [auth, setAuth] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleAuth() {
    setAuth((auth) => !auth);
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the form from reloading the page

    // sending a POST request
    const response = await fetch("#", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    });
    if (!response.ok) {
      console.error(`Received status code ${response.status}`);
      return;
    }
    const data = await response.json();
    console.log(data);
  };

  return (
    <section className="auth-section">
      <form onSubmit={handleSubmit}>
        <h1>{auth ? "login" : "signin"}</h1>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Enter your password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Submit" />
        <button onClick={handleAuth}>
          {auth ? "login instead" : "sign in instead"}
        </button>
      </form>
    </section>
  );
}
export default AuthPage;
