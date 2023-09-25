import React from "react";
import { FiActivity } from "react-icons/fi";
import "./Header.css"
import { Link } from "react-router-dom";



function HeaderSearch(){


    return(
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo">
                        <Link to="/">Fitwa<FiActivity/></Link>
                        <input className="search"></input>
                    </div>
                    <ul className="menu">
                        <li>
                            <Link to="menu-link">gym near me</Link>
                        </li>
                        <li>
                            <Link to="about">about us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderSearch