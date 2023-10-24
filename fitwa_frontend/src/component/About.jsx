import React from "react";
import Navbar from "./Navbar";
import './About.css'
import { FaGithub } from "react-icons/fa6";

function About(){
    return(
        <div>
            <Navbar/>
            <div className="about">
                <h1 className="i1" >Developer team</h1>
                <p className="i2">Sorawit Nunsatit</p>
                <p className="i3">Thanakorn Promsuwan</p>
                <p className="i4">Thanakorn Prakobdee</p>
                <a className="i5" href="https://github.com/sorawitkku"><FaGithub/></a>
                <a className="i6" href="https://github.com/NongBond"><FaGithub/></a>
                <a className="i7" href="https://github.com/AOMZIN"><FaGithub/></a>
                <small className="i8">643040815-1</small>
                <small className="i9">643040808-8</small>
                <small className="i10">643040625-6</small>
                
            </div>
        </div>
    );
}

export default About