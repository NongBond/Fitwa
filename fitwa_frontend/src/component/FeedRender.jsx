import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeedRender.css";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function FeedRender() {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  const chooseGymPhoto = {
    "Diamond Fitness":
      "data:image/png;base64,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",
    "NP Fitness":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3Dh0G3yR6SQSOPdesfmXBSF8-z5Q_rUbTw&usqp=CAU",
    "Columbo Gym":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOvJQOoYNMIRMZo6nSMk7yjlkleLt-ziguQ&usqp=CAU",
  };

  const [listOfPost, setListOfPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6969/main/post") // get all the post in database
      .then((response) => {
        setListOfPost(response.data); //
      });
  }, [listOfPost]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleClick = () => {
    navigate("/Map");
  };

  return (
    <div className="feed-render-com">
      {listOfPost.map((value, index) => {
        return (
          <div className="post" key={index}>
            <div className="feedtitle">{value.title}</div>
            <div className="gym_name">
              <p onClick={handleClick}>{value.gymName}</p>
            </div>
            <img
              className="gym_img"
              src={chooseGymPhoto[value.gymName]}
              onClick={handleClick}
            />
            <div className="post_description">
              <p>{value.postDescription}</p>
            </div>
            <p className="date">{formatDate(value.createdAt)}</p>
            <p className="userName">Post by {value?.poster}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FeedRender;
