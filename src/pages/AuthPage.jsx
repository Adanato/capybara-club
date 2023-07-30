import { useState } from "react";

function AuthPage() {
  const [auth, setAuth] = useState(true);

  function handleAuth() {
    setAuth((auth) => !auth);
  }
  return (
    <section className="auth-section">
      <form>
        <h1>{auth ? "login" : "signin"}</h1>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label htmlFor="password">Enter your password: </label>
          <input type="password" name="password" id="password" required />
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
