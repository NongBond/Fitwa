//import React from "react";
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./FeedRender.css";

function FeedRender() {
  const post = [{postTitle:"Find friend",
                selectedGym:"NP Park",
              description:"Anyone want to go to NP Park at 2PM"}]
  // const [listOfPost, setListOfPost] = useState([]);
  // useEffect(() => {axios.get("http://localhost:6969/main") // get all the post in database
  // .then((response, ) => {
  //   setListOfPost(response.data); //
  // })},[])

    return (
      <div className="feed-render-com">
        {post.map((value, key) => { // map through each object(post)
          return <div className="post">
            <div className="title">{value.postTitle}</div>
            <div className="post_description">{value.selectedGym}</div>
            <div className="gym_name">{value.description}</div>
          </div>
        })}

        {/* {listOfPost.map((value, key) => { // map through each object(post)
          return <div className="post">
            <div className="title">{value.title}</div>
            <div className="post_description">{value.gymName}</div>
            <div className="gym_name">{value.postDescription}</div>
            <br></br>
          </div>
        })} */}
      </div>
    );
  }
  
  export default FeedRender;
  
