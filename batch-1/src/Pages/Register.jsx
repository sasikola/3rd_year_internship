import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import the CSS file

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      setError("All fields are required");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Save user data to local storage
      const user = { username, email, password };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Registration successful!");
      navigate("/login");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Sign Up</button>
        <p className="login-link">
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
