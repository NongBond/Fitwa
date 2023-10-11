import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
  
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        setCurrentUser(true);
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
    };
  
    if (currentUser) {
      return null;
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" />
            <small id="emailHelp">We'll never share your email with anyone else.</small>
          </div>
          <div>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" id="exampleInputPassword1" name="password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default SignUp;
