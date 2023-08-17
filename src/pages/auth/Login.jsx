import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../util";
import "./Login.css";

function Login() {
  return (
    <main className="auth-page-container">
      <Form />
    </main>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(auth, "log state");
    if (auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const credentials = {
      email: name,
      password: password,
    };
    const response = await axios.post(
      `${baseUrl}/api/v1/auth/login`,
      credentials
    );
    if (response.status !== 200) {
      console.error(`Received status code ${response.status}`);
      return;
    }
    setAuth(true);
  };

  async function handleDemoCredentials(event) {
    event.preventDefault();
    const demoCredentials = {
      email: "A@gmail.com",
      password: "Adam20190",
    };
    const response = await axios.post(
      `${baseUrl}/api/v1/auth/login`,
      demoCredentials
    );
    if (response.status !== 200) {
      console.error(`Received status code ${response.status}`);
      return;
    }
    setAuth(true);
  }

  return (
    <section className="auth-section">
      <form action="/login" method="post">
        <header>
          <h1>Welcome to CSpace</h1>
          <span>
            Create an account <Link to="/register">Register</Link>
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

        <input type="submit" value="login" onClick={handleSubmit} />
        <input type="submit" value="Demo" onClick={handleDemoCredentials} />
        <button onClick={() => navigate("/")}>BUTTO</button>
      </form>
    </section>
  );
}
export default Login;
