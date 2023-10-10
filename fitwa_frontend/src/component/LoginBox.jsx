import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function LoginBox() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){
        e.preventDafault();

        try{
            await axios.post("http://localhost:6969/main/create",{
                email,password
            })
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <div className="LoginBoxCon">
            <h1>Sign in</h1>
            <div>
                <form action="POST">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <input type="sumbit" onClick={submit}/>
                </form>
                <br />
                <p>OR</p>
                <br />
                <Link to="/singup">Sign Up</Link>
            </div>
        </div>
    )
}
