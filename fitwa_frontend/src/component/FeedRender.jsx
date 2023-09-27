//import React from "react";
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./FeedRender.css";

function FeedRender() {
  // const post = [{postTitle:"Find friend",
  //               selectedGym:"NP Park",
  //             description:"Anyone want to go to NP Park at 2PM"}]
  const [listOfPost, setListOfPost] = useState([]);
  useEffect(() => {axios.get("http://localhost:6969/main/post") // get all the post in database
  .then((response) => {
    setListOfPost(response.data); //
  })},[])

  // (value.gymName == 'Diamond Fitness') ? {
  //   <img src="https://scontent.fkkc3-1.fna.fbcdn.net/v/t39.30808-6/378957768_821998876594782_1789587538152082356_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFblBmNx6ZKGA2MAScaEXIxHDd7C23gGEQcN3sLbeAYRHXGF4Uo6hh3-esnjXWKR3rbMTEFl2UtK3Hj4V5EYIME&_nc_ohc=lwCe0gHGckAAX-_5hcU&_nc_ht=scontent.fkkc3-1.fna&oh=00_AfCOisfTTyidOJd5V4DxYDP7htDCjd50g4ZmzoUiskPDKg&oe=65189124"/>
  // } : ""

    return (
      <div className="feed-render-com">
        {/* {post.map((value, key) => { // map through each object(post)
          return <div className="post">
            <div className="title">{value.postTitle}</div>
            <div className="post_description">{value.selectedGym}</div>
            <div className="gym_name">{value.description}</div>
          </div>
        })} */}

        {listOfPost.map((value, key) => { // map through each object(post)
          return <div className="post">
            <div>{key.title}</div>
            <div className="title">{value.title}</div>
            {/* <div className="gym-name"><p className="gymName-header">Gym Picture</p><p>{value.gymName}</p></div> */}
            <div className="gym-name"><p>{value.gymName}</p></div>
            <div className="description">{value.postDescription}</div>
            <br></br>
          </div>
        })}
      </div>
    );
  }
  
  export default FeedRender;
  
