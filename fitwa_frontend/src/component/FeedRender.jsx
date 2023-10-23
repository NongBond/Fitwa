//import React from "react";
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./FeedRender.css";
import { getAuth, onAuthStateChanged , signOut} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function FeedRender() {
  const [userData, setUserData] = useState(null);
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  const chooseGymPhoto = {
    "Diamond Fitness": "https://cdn5.vectorstock.com/i/1000x1000/91/49/abstract-diamond-gym-logo-icon-design-modern-vector-30099149.jpg",
    "NP Fitness": "https://i.pinimg.com/564x/45/a9/df/45a9dfd897b572e4dd6db969c4868151.jpg"
  }
  // const post = [{postTitle:"Find friend",
  //               selectedGym:"NP Park",
  //             description:"Anyone want to go to NP Park at 2PM",
  //           }]
  const [listOfPost, setListOfPost] = useState([]);
  useEffect(() => {axios.get("http://localhost:6969/main/post") // get all the post in database
  .then((response) => {
    setListOfPost(response.data); //
  })},[listOfPost])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } else {
        setUserData(null);
        navigate("/Login");
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  // (value.gymName == 'Diamond Fitness') ? {
  //   <img src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/378957768_821998876594782_1789587538152082356_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFblBmNx6ZKGA2MAScaEXIxHDd7C23gGEQcN3sLbeAYRHXGF4Uo6hh3-esnjXWKR3rbMTEFl2UtK3Hj4V5EYIME&_nc_ohc=lwCe0gHGckAAX-_5hcU&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCOisfTTyidOJd5V4DxYDP7htDCjd50g4ZmzoUiskPDKg&oe=65189124"/>
  // } : ""
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString();
  };

    return (
      <div className="feed-render-com">
        {/* {post.map((value, key) => { // map through each object(post)
          return <div className="post">
            <div className="user"> Aiza007</div>
            <div className="feedtitle">{value.postTitle}</div>
            <div className="gym_name">{value.selectedGym}</div>
            <img className="gym_img"src='https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/302187077_497436025724706_8197387772549042837_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IU31KOEfV5cAX_USJfN&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfAcaYcaVmUkQIOdMJ2OTOud4-GBUCxgng2jGuWLCFuklA&oe=653BC8D5'/>
            <div className="post_description">{value.description}</div>
            <p className="date">Post at 10 june,9:00</p>
          </div>
        })} */}

        {listOfPost.map((value, index) => { // map through each object(post)
          return <div className="post" key={index}>
            <div className="feedtitle">{value.title}</div>
            <div className="gym_name">
              <p>{value.gymName}</p>
            </div>
              <img className="gym_img" src={chooseGymPhoto[value.gymName]} />
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
  
