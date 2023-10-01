
import { FiActivity,} from "react-icons/fi";
import React, { useState , useEffect } from 'react';
import "./Banner.css"


let bannerData = {
    title:'FITWA',
    desc:'This website is our term project for  Interactive Web Programming.',
    desc1:'643040815-1 SORAWIT NUNSATIT.',
    desc2:'643040808-8 THANAKORN PROMSUWAN.',
    desc3:'643040625-6 THANAKORN PRAKOBDEE.'
}


function AboutBanner(){

return(
    <div className="banner-bg">
        <div className="container">
            <div className="banner-con">
                <div className="banner-text-about">
                        <h1>{bannerData.title}<FiActivity/></h1>
                        <p>{bannerData.desc}</p>
                        <p>{bannerData.desc1}</p>
                        <p>{bannerData.desc2}</p>
                        <p>{bannerData.desc3}</p>
                </div>
            </div>
        </div>
    </div>
);
}

export default AboutBanner