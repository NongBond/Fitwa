
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged , signOut} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './UserProfile.css'

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } else {
        setUserData(null);
        navigate("/Login");
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/Login");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div className="Usercon">
      <h2>{userData.Name} {userData.Surname}</h2>
      <p>Email: {userData.email}</p>
      <p>Name: {userData.Name}</p>
      <p>Surname: {userData.Surname}</p>
      <p>Age: {userData.age}</p>
      <p>Sex: {userData.sex}</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => navigate("/EditProfile")}>Edit Profile</button>
    </div>
  );
}

export default UserProfile;
