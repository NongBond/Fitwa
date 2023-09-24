import React from "react";
import "./Banner.css"
import { FiActivity } from "react-icons/fi";
import { Link } from "react-router-dom";


let bannerData = {
    title:'FITWA',
    desc:'website that not only helps users discover nearby gyms but also connects them with like-minded individuals who share their fitness goals and interests. This platform should seamlessly blend a comprehensive gym directory with a social networking feature, allowing me to not only find the perfect workout spot but also make new friends and fitness buddies along the way.'
}
function Banner(){
    return(
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}<FiActivity/></h1>
                        <p>{bannerData.desc}</p>
                        <div className="login-con">
                        <Link to="signin" className="banner-login">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner