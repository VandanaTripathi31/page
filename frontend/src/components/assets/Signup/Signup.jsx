import React from "react";
import "./Signup.css";
import teddyBackground from "../images/blurred_teddyhe.jpg"; // Adjust the path as per your folder structure

const SignupPage = () => {
  return (
    <div
      className="signup-container"
      style={{ backgroundImage: `url(${teddyBackground})` }}
    >
      <div className="signup-form">
        <h2>Create Your Account</h2>
        <form>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
