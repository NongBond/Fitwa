import React from "react";
import { Link } from "react-router-dom";
import { IoIosFitness,IoIosLogOut } from "react-icons/io";
import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <div className="left">
            <Link to="/main"><IoIosFitness/></Link>
            <Link to="/EditProfile">Edit Profile</Link>
            <Link to="/Chat">Chat</Link>
            <Link to="/Map">Gym</Link>
            <Link to="/About">About</Link>
            </div>
            <div className="right">
            <Link to="/"><IoIosLogOut/></Link>
            </div>
        </div>
    );
}

export default Navbar