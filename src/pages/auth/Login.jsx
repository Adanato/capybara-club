import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../util";
import "./Login.css";

function Login() {
  return (
    <main className="auth-page-container">
      <Form></Form>
    </main>
  );
}

function Form() {
  const [auth, setAuth] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleAuth() {
    setAuth((auth) => !auth);
  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the form from reloading the page

    const credentials = {
      name: name,
      
      password: password,
    };
    // sending a POST request
    const response = await axios.post(
      `${baseUrl}/api/v1/auth/login`,
      credentials
    );
    if (!response.ok) {
      console.error(`Received status code ${response.status}`);
      return;
    }

    const data = await response.json();
    console.log(data);
    setAuth(true);
  };

  async function handleDemoCredentials () {
    setName("")
    setPassword("")
    await handleSubmit();
  }

  return (
    <section className="auth-section">
      <form action="/login" method="post" onSubmit={handleSubmit}>
        <header>
          <h1>Welcome to CSpace</h1>
          <span>
            Create an account or <Link>signup</Link>
          </span>
        </header>

        <div>
          <label htmlFor="name">Username </label>
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
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="login" />
        <input type="submit" value="demoLogin" onClick={}/>
      </form>
    </section>
  );
}
export default Login;
