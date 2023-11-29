import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import "./SignUp.css";
import axios from "axios";

function SignUp() {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, Name, Surname } = e.target.elements;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      await updateProfile(userCredential.user, {
        displayName: `${Name.value} ${Surname.value}`,
      });

      const userDocRef = doc(db, "users", userCredential.user.uid);
      await setDoc(userDocRef, {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        Name: Name.value,
        Surname: Surname.value,
        age: age,
        sex: sex,
      });

      setCurrentUser(true);

      axios
        .get("https://fitwa-api.vercel.app/user/users", {
          withCredentials: true,
        })
        .then();
      navigate("/Login");
    } catch (error) {
      alert(error.message);
    }
  };

  if (currentUser) {
    return null;
  }

  return (
    <div className="con">
      <div className="signin-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" id="exampleInputPassword1" name="password" />
          </div>
          <div>
            <label htmlFor="exampleInputName">Name</label>
            <input type="text" id="exampleInputName" name="Name" />
          </div>
          <div>
            <label htmlFor="exampleInputSurname">Surname</label>
            <input type="text" id="exampleInputSurname" name="Surname" />
          </div>
          <div>
            <label htmlFor="exampleInputAge">Age</label>
            <input
              type="number"
              id="exampleInputAge"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="sexSelect">Physical Gender</label>
            <select
              id="sexSelect"
              name="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
