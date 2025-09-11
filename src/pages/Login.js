import React from "react";
import Tilt from "react-parallax-tilt";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={400}>
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forget Password</a>
            </div>

            <button type="submit" className="login-btn">
              Log in
            </button>

            <p className="register-text">
              Don't have an account? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </Tilt>
    </div>
  );
}
