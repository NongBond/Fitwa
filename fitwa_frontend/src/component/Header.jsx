import React from "react";
import { FiActivity } from "react-icons/fi";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo">
            <Link to="/">Fitwa<FiActivity/></Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/about">about us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
