// Signup.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Save the user in localStorage (simplified for this demo)
    const newUser = { email: form.email, password: form.password };
    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Account created successfully!");
    navigate("/login"); // Redirect to login page after sign-up
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSignup}>
        <h2>Create New Account</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
