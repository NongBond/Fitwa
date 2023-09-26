import React from "react";
import "./FeedRender.css";

function FeedRender({ posts }) {
  const post = [{postTitle:"Find friend",
                selectedGym:"NP Park",
              description:"Anyone want to go to NP Park at 2PM"}]
    return (
      <div className="feed-render-con">
        <h2>Feed</h2>
        {posts.map((post, index) => ( 
          <div key={index} className="post">
            <h3>{post.postTitle}</h3>
            console.log(postTitle);
            <p>Gym Name: {post.selectedGym}</p>
            <p>Description: {post.description}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default FeedRender;
  
