// import React, { useState } from "react";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PostSection.css";
import { AuthContext } from "../context/AuthContext";

function PostSection() {
  const [title, settitle] = useState("");
  const [gymName, setgymName] = useState("");
  const gymOptions = ["Diamond Fitness", "NP gym"];
  const [postDescription, setPostDescription] = useState("");
  const { user } = useContext(AuthContext);

  const submitData = () => {
    axios
      .post(
        "https://fitwa-api.vercel.app/main/create",
        {
          title: title,
          gymName: gymName,
          postDescription: postDescription,
          poster: user.name,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(Option);
        console.log("it's work");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <select
              id="gymName"
              name="gymName"
              value={gymName}
              onChange={(e) => setgymName(e.target.value)}
            >
              \ <option>--</option>
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
