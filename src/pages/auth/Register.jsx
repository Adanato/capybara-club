import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../util";
import "./Register.css";

function Register() {
  const [auth, setAuth] = useState(false);
  return (
    <main className="auth-page-container">
      {auth ? <h1>User has registered</h1> : ""}
      <Form setAuth={setAuth}></Form>
    </main>
  );
}

function Form({ setAuth }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the form from reloading the page

    //Credentials object
    const credentials = {
      name: name,
      email: email,
      password: password,
    };

    // sending a POST request
    const response = await axios.post(
      `${baseUrl}/api/v1/auth/register`,
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

  return (
    <section className="auth-section">
      <form onSubmit={handleSubmit}>
        <header>
          <h1>Welcome to CSpace</h1>
          <span>
            Create an account or <Link to="/s">login</Link>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <input type="submit" value="Sign Up" />
      </form>
      <p>Forgot Password?</p>
    </section>
  );
}
export default Register;
