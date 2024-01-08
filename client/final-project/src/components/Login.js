// Login.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    // Basic authentication logic (replace with your actual authentication)
    if (username === "admin" && password === "password") {
      setAuthenticated(true);
      history.push("/users");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="w3-container w3-half w3-margin-top w3-display-middle">
      <div className="w3-card-4 w3-light-grey w3-margin-top">
        <div className="w3-container w3-blue">
          <h2 className="w3-center">Login</h2>
        </div>
        <form className="w3-container w3-padding">
          <label htmlFor="username">
            <b>Username:</b>
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w3-input w3-border w3-margin-bottom"
          />
          <label htmlFor="password">
            <b>Password:</b>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w3-input w3-border w3-margin-bottom"
          />
          <button
            type="button"
            onClick={handleLogin}
            className="w3-button w3-block w3-blue w3-section w3-round-large"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
