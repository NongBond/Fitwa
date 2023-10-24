// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./PostSection.css";

function PostSection() {
  const [title, settitle] = useState("");
  const [gymName, setgymName] = useState("");
  const gymOptions = ["Diamond Fitness", "NP gym"];
  const [postDescription, setPostDescription] = useState("");

  const submitData = () => {
    axios.post("http://localhost:6969/main/create", {
      title:title, 
      gymName:gymName,
      postDescription: postDescription}).then((response) => {
        console.log(Option)
    console.log("it's work")
  }).catch(err => {console.log(err)})
  }


  return (
  <div className="post-section-con">
    <div className="post-title-gymname">
      <div className="NAME">
        <div className="title">
                <label htmlFor="title">Post Title:</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
        </div>
        <div className="gymname">
                <label htmlFor="gymName">Gym Name:</label>
                <select id="gymName" name = "gymName" value={gymName} onChange={(e) => setgymName(e.target.value)}>
                  <h2>{gymName}</h2>
                  <option>--</option>
                  <option>Diamond Fitness</option>
                  <option>NP Fitness</option>
                  <option>Columbo Gym</option>
                </select>
        </div>
      </div>
      <div className="postDescription">
            <label htmlFor="postDescription">Post Description:</label>
            <textarea
              id="postDescription"
              name="postpostDescription"
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
            />
      </div>
      <div className="post-button">
        <button onClick={submitData}>Post</button>
      </div>
  </div>
</div>
  );
}

export default PostSection;
