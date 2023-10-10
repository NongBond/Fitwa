import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import firebaseConfig from "../firebase.config";

const SignUp = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target.element;

        try{
            firebaseConfig.auth().createUserWithEmailandPassword(email.value, password.value);
            setCurrentUser(true);
        }
        catch(error){
            alert(error);
        }
    }

    if (currentUser){
        return <Redirect  to='/main'/>
    }

    return(
        <div>
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            </form>
        </div>
    )
}

export default SignUp