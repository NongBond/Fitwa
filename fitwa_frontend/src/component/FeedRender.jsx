
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./FeedRender.css";
import { getAuth, onAuthStateChanged , signOut} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";


function FeedRender() {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  const chooseGymPhoto = {
    "Diamond Fitness": "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/350953171_1178105409533405_4005548931024668166_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6_GTpRTX9vAAX-0nIih&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfAz5Fil6NePUywpNmuDFj1qcsTVEwXO6WlaNNwcZkGmeQ&oe=653CDA9D",
    "NP Fitness": "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/302187077_497436025724706_8197387772549042837_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IU31KOEfV5cAX_USJfN&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfAcaYcaVmUkQIOdMJ2OTOud4-GBUCxgng2jGuWLCFuklA&oe=653BC8D5",
    "Columbo Gym": "https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/299933177_486503786813846_9135447845419779078_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bscmq2gsxDAAX9V3W8c&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfD5PMi4okl1tZ_G4gRRclFm9KC8h3d6-j9EEqAIZtgM8g&oe=653CF618"
  }

  const [listOfPost, setListOfPost] = useState([]);
  useEffect(() => {axios.get("http://localhost:6969/main/post") // get all the post in database
  .then((response) => {
    setListOfPost(response.data); //
  })},[listOfPost])

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString();
  };

  const handleClick = () => {
    navigate('/Map');
  };

    return (
      <div className="feed-render-com">
        {listOfPost.map((value, index) => {
          return <div className="post" key={index}>
            <div className="feedtitle">{value.title}</div>
            <div className="gym_name">
              <p onClick={handleClick} >{value.gymName}</p>
            </div>
              <img className="gym_img" src={chooseGymPhoto[value.gymName]} onClick={handleClick}/>
            <div className="post_description">
              <p>{value.postDescription}</p>
            </div>
            <p className="date">Post at {formatDate(value.createdAt)}</p>
          </div>
        })}
      </div>
    );
  }
  
  export default FeedRender;
  
