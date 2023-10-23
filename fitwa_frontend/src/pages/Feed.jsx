import PostSection from "../component/PostSection";
import FeedRender from "../component/FeedRender";
import Navbar from "../component/Navbar";
import React from "react";

function Feed(){

    return(
        <div className="grid-container">
            <Navbar/>
            <PostSection className='PostS'/>
            <FeedRender className='FeedR'/>
       </div>
)

}

export default Feed
