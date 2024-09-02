import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (email === "" || password === "") {
      setError("Both fields are required");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid email or password");
    } else {
      setError("");
      alert("Login successful!");
      // Navigate to another page, e.g., home
      navigate("/");
    }
  };

  const navigateToSignUp = () => {
    navigate("/register"); 
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Login</button>
        <p className="signup-link">
          Don't have an account?{" "}
          <span className="link" onClick={navigateToSignUp}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
