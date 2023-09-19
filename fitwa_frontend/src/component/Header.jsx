import React from "react";
import { FiActivity } from "react-icons/fi";
import "./Header.css"



function Header(){


    return(
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo">
                        <a href="#">Fitwa<FiActivity/></a>
                    </div>
                    <ul className="menu">
                        <li>
                            <a href="menu-link">gym near me</a>
                        </li>
                        <li>
                            <a href="menu-link">about us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header