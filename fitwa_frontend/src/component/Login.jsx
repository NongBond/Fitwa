import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

function Login() {
  const auth = getAuth();
  const navigate = useNavigate(); // hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        e.target.email.value,
        e.target.password.value
      );

      // Signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);

      // Redirect to / after successful login
      navigate("/Main");

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login error:", errorCode, errorMessage);
    }
  };

  return (
    <div className="con">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              id="exampleInputPassword1" 
              name="password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;