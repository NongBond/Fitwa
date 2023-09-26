import "./Banner.css"
import { FiActivity } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";
import React, { useState , useEffect } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase.config';
import { signInWithPopup } from 'firebase/auth';


let bannerData = {
    title:'FITWA',
    desc:'website that not only helps users discover nearby gyms but also connects them with like-minded individuals who share their fitness goals and interests. This platform should seamlessly blend a comprehensive gym directory with a social networking feature, allowing me to not only find the perfect workout spot but also make new friends and fitness buddies along the way.'
}


function Banner(){

    const navaigate = useNavigate();
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
    navaigate('/main');
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
                <button className="banner-login" onClick={login}>Sign in</button>
                </div>
            </div>
        </div>
    </div>
</div>

);
}

export default Banner

