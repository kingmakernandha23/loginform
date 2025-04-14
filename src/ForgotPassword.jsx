// ForgotPassword.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Here, you would generally send a reset link to the email (this is just a placeholder)
    alert(`Password reset link sent to ${email}`);
    navigate("/login");  // Redirect to login page after submitting
  };

  return (
    <div className="login-container">
      <form onSubmit={handleResetPassword}>
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
