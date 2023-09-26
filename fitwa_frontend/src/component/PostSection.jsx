// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import "./PostSection.css";

function PostSection() {
  const [postTitle, setPostTitle] = useState("");
  const [selectedGym, setSelectedGym] = useState("");
  const gymOptions = ["Diamond Fitness", "NP gym"];
  const [description, setDescription] = useState("");

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const handleGymChange = (event) => {
    setSelectedGym(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

// Inside PostSection.js
  const handlePost = () => {
    const post = {
      postTitle,
      selectedGym,
      description,
    };
    setPostTitle("");
    setSelectedGym("");
    setDescription("");
  };


  return (
    <div className="post-section-con">
      <h2>Create Gym Post</h2>
      <div className="post-content">
        <div className="post-title-gymname">
          <div className="post-title">
            <label htmlFor="postTitle">Post Title:</label>
            <input
              type="text"
              id="postTitle"
              value={postTitle}
              onChange={handlePostTitleChange}
            />
          </div>
          <div className="post-gymname">
            <label htmlFor="gymName">Gym Name:</label>
            <select id="gymName" value={selectedGym} onChange={handleGymChange}>
              {gymOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="post-description">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <div className="post-button">
        <button onClick={handlePost}>Post</button>
      </div>
    </div>
  );
}

export default PostSection;
