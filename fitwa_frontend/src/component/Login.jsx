import React, {useContext} from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase.config";

function Login(){

    const handleSubmit = (e) => {
        e.preventDefault();

        const {email, password} = e.target.element;

        try{
            firebaseConfig.auth().signInWithEmailandPassword(email.value, password.value);
        }
        catch(error){
            alert(error);
        }
    }

    const {currentUser} = useContext(AuthContext)
    if(currentUser){
        return <Redirect to="/main" />;
    }
    return(
    
        <div>
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="bth btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login