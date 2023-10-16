import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
      navigate("/EditProfile");

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Login error:", errorCode, errorMessage);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp">We'll never share your email with anyone else.</small>
        </div>
        <div>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            id="exampleInputPassword1" 
            name="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;