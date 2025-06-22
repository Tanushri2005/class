import { useState } from "react";
import "./style/Login.css";

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validUsername = "witch";
  const validPassword = "0000";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      setErrorMessage("");
      onLoginSuccess();          // show <AfterLogin />
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="container">
      {/* logo comes from <Pages /> that sits above this component */}
      <h1 className="login-title">Login</h1>

      {/* form now stacks its children vertically */}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default Login;