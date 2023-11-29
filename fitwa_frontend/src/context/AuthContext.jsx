import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  // useEffect(() => {
  //     const user = localStorage.getItem("users")
  //     setUser(JSON.parse(user));
  //     console.log(user)
  // },[])

  // const auth = getAuth();
  // const db = getFirestore();

  // useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //       if (user) {
  //         setUser(user);

  //         const userDocRef = doc(db, "users", user.uid);
  //         const userDoc = await getDoc(userDocRef);

  //         if (userDoc.exists()) {
  //           const userData = userDoc.data();
  //           setFormData({
  //             Name: userData.Name,
  //             Surname: userData.Surname,
  //             age: userData.age,
  //             sex: userData.sex,
  //           });
  //         }
  //       } else {
  //         setUser(null);
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, [auth, db]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        // User is signed in
        const userDocRef = doc(db, "users", authUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();

          // Set uid as userId
          const userId = authUser.uid;

          // Call your backend API with the userId
          try {
            const response = await axios.get(
              `https://fitwa-api.vercel.app/user/find/${userId}`,
              {
                withCredentials: true,
              }
            );
            setUser(response.data);
            console.log("user", response.data);
          } catch (error) {
            console.error("Error fetching user data from the backend:", error);
          }
        } else {
          setUser(null);
        }
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
