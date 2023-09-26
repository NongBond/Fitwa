// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostSection.css";

function PostSection() {
  const [title, settitle] = useState("");
  const [gymName, setgymName] = useState("");
  const gymOptions = ["Diamond Fitness", "NP gym"];
  const [postDescription, setPostpostDescription] = useState("");

  const handletitleChange = (event) => {
    settitle(event.target.value);
  };

  const handleGymChange = (event) => {
    setgymName(event.target.value);
  };

  const handlepostDescriptionChange = (event) => {
    setPostpostDescription(event.target.value);
  };

// Inside PostSection.js
  // const handlePost = () => {
  //   const post = {
  //     title,
  //     gymName,
  //     postDescription,
  //   };
  //   settitle("");
  //   setgymName("");
  //   setPostpostDescription("");
  // };

  const submitData = (user) => {
    console.log(user.title)
    axios.post("http://localhost:6969/main/create", {
      title:user.title, 
    gymName:user.gymName,
     postDescription: user.postDescription}).then((response) => {
    console.log("it's work")
  }).catch(err => {console.log(err)})
  }


  return (
      <div className="post-section-con">
        <h2>Create Gym Post</h2>
          <div className="post-title-gymname">
            <div className="post-title">
              <label htmlFor="title">Post Title:</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={handletitleChange}
              />
            </div>
            <div className="post-gymname">
              <label htmlFor="gymName">Gym Name:</label>
              <select id="gymName" name = "gymName"value={gymName} onChange={handleGymChange}>
                {gymOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          <div className="post-postDescription">
            <label htmlFor="postDescription">postDescription:</label>
            <textarea
              id="postDescription"
              name="postpostDescription"
              value={postDescription}
              onChange={handlepostDescriptionChange}
            />
          </div>
        </div>
        <div className="post-button">
          <button onClick={submitData}>Post</button>
        </div>
      </div>
  );
}

export default PostSection;
