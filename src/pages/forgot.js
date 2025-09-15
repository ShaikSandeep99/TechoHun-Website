import React, { useState } from "react";
import "./forgot.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your registered email.");
      return;
    }

    // 🔹 API call to backend (replace with real endpoint)
    // fetch("/api/forgot-password", { method: "POST", body: JSON.stringify({ email }) })
    //   .then(res => res.json())
    //   .then(data => setMessage("Password reset link sent to your email."));

    setMessage("✅ Password reset link has been sent to your email.");
    setEmail("");
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h2>Forgot Password</h2>
        <p>Enter your email to receive a password reset link.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send Reset Link</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;