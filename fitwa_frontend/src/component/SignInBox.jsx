import React, { useState , useEffect } from 'react';
import './SignInBox.css';
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase.config';
import { signInWithPopup } from 'firebase/auth';



function SignInBox(){

    const [user,setUser] = useState('');
    useEffect( () => {auth.onAuthStateChanged((user) => {setUser(user)})}, []) 

    const login = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  
}
return(

    <div className="banner-bg">
    <div className="container">
        <div className="banner-con">
            <div className="banner-text">
                <h1>{bannerData.title}<FiActivity/></h1>
                <p>{bannerData.desc}</p>
                <div className="login-con">
                <button className="banner-login">Sign in</button>
                </div>
            </div>
        </div>
    </div>
</div>

);
}

export default SignInBox