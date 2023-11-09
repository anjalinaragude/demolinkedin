import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./LoginForm.css"; // Import your CSS file
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration purposes, simply log the email and password
    console.log("Email:", email);
    console.log("Password:", password);

    // Simulate login - Replace this with your actual login logic
    const isLoggedIn = true; // For example, assume login is successful
    if (!isLoggedIn) {
      // Redirect to the registration page if not logged in
    //   history.push("/register");
    } else {
      // Handle authenticated user (e.g., route to the home/dashboard)
      // For example: history.push('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in to your account</h2>
        <div className="input-group">
          <label htmlFor="email">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email or Phone</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="loginbtn">
          Sign In
        </button>
        {/* <p className="forgot-password">Forgot password?</p> */}
        <p className="register-link">
          Not registered yet? <Link to="">Sign up</Link> here
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
