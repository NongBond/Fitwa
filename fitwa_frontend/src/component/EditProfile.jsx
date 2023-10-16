// EditProfile.js

import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


function EditProfile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    Name: "",
    Surname: "",
    age: "",
    sex: "",
  });

  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setFormData({
            Name: userData.Name,
            Surname: userData.Surname,
            age: userData.age,
            sex: userData.sex,
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        Name: formData.Name,
        Surname: formData.Surname,
        age: formData.age,
        sex: formData.sex,
      });
    }
    navigate("/UserProfile");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="editName">Name</label>
          <input
            type="text"
            id="editName"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="editSurname">Surname</label>
          <input
            type="text"
            id="editSurname"
            name="Surname"
            value={formData.Surname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="editAge">Age</label>
          <input
            type="number"
            id="editAge"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="editSex">Sex</label>
          <select
            id="editSex"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile;
