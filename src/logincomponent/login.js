import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { email: '', password: '' };

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      formIsValid = false;
      newErrors.email = 'Invalid email format';
    }

    // Password validation
    if (!password) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Proceed with form submission or further actions
      alert('Form is valid! Logging in...');
      // Redirect or perform action after validation
    } else {
      alert('Please fix the errors in the form.');
    }
  };

  return (
    <>
      <meta name="viewport" content="width-device-width, initial-scale=1.0" />
      <title>Login</title>
      <link rel="icon" type="image/x-icon" href="/img/favicon.ico.jpg" />
      <link rel="stylesheet" href="/css-folder/login.css" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        df-messenger {\n         --df-messenger-bot-message: #123acc;\n         --df-messenger-button-titlebar-color: #56bfdf;\n         --df-messenger-chat-background-color: #fafafa;\n         --df-messenger-font-color: white;\n         --df-messenger-send-icon: #3511d2;\n         --df-messenger-user-message: #479b3d;\n        }\n      ",
        }}
      />
      <div className="div1">
        <div className="div2">
          <h1 id="title">Login</h1>
          <form id="f1" onSubmit={handleSubmit}>
            <div className="input_g">
              <div className="input-f">
                <i className="fa-solid fa-envelope" />
                <input
                  type="email"
                  placeholder="Email"
                  id="login-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
                <br />
              </div>
              <div className="input-f">
                <i className="fa-solid fa-key" />
                <input
                  type="password"
                  placeholder="Password"
                  id="login-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
                <br />
              </div>
              <p>
                <a href="#"> Forgot password? </a>
              </p>
              <br />
            </div>
            <div className="btn-f">
              <button type="submit" className="log">
                Login
              </button>
            </div>
          </form>
        </div>
        <df-messenger
          intent="WELCOME"
          chat-title="Technohub_bot"
          agent-id="4bc203a0-315f-47d9-b1f2-2bd52990f28b"
          language-code="en"
        />
      </div>
    </>
  );
}

export default Login;
