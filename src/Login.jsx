// Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";  // Import the CSS file

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      setUser(storedUser);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Log In</button>
      </form>
      <p>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
      <p>
        Don't have an account? <a href="/signup">Create one</a>
      </p>
    </div>
  );
};

export default Login;
