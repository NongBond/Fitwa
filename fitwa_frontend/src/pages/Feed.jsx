import PostSection from "../component/PostSection";
import FeedRender from "../component/FeedRender";
import React from "react";
import Navbar from "../component/Navbar";

function Feed(){

    return(
        <div>
        <Navbar/>
        <PostSection/>
        <FeedRender/>
    </div>
)

}

export default Feed
