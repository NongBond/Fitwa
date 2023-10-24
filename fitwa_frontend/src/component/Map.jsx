import React from "react";
import Navbar from "./Navbar";
import './Map.css'

function Map(){
    return(
        <div>
            <Navbar/>
            <div className="Map">
                <div className="Diamond">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.1861299235447!2d102.81910153143276!3d16.480568265511074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228b55e699ff3d%3A0x5152e8035d8c9aa5!2zRGlhbW9uZCBGaXRuZXNzIOC4q-C4peC4seC4hyDguKHguIIu!5e0!3m2!1sen!2sth!4v1698110168368!5m2!1sen!2sth"></iframe>
                </div>
                <div className="NP">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.4648991803914!2d102.81517553209186!3d16.482645561074293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228a9a5deaf8fd%3A0xc26da23b05fa0e46!2sNP%20Park!5e0!3m2!1sen!2sth!4v1698110213442!5m2!1sen!2sth"></iframe>
                </div>
                <div className="Colu">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.904067030554!2d102.80209497596991!3d16.48039458426036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31226027e31b26e3%3A0xd25f6c019314a8eb!2sColumbo%20GYM!5e0!3m2!1sen!2sth!4v1698109528693!5m2!1sen!2sth"></iframe>
                </div>
                <div className="pD">
                    <p>Diamond Fitness</p>
                    <small>Open 10.00 - 22.00 </small>
                    <small>40baht per day </small>
                    <small>789baht per month</small>
                </div>
                <div className="pN">
                    <p>NP Park Gym</p>
                    <small>Open 10.00 - 22.00 </small>
                    <small>40baht per day </small>
                    <small>789baht per month</small>
                </div>
                <div className="pC">
                    <p>Columbo Gym</p>
                    <small>Open 10.00 - 22.00 </small>
                    <small>40baht per day </small>
                    <small>789baht per month</small>
                </div>
            </div>
        </div>
    );
}

export default Map