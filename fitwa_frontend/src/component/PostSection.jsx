import React, {useState} from "react";
import "./PostSection.css"
import { Link } from "react-router-dom";

 

function PostSection(){
    const [postTitle, setPostTitle] = useState('');
  const [selectedGym, setSelectedGym] = useState('Gym A'); // Default selected gym
  const gymOptions = ['Gym A', 'Gym B'];
  const [description, setDescription] = useState('');

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  const handleGymChange = (event) => {
    setSelectedGym(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <h2>Create a Gym Post</h2>
      <div>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          onChange={handlePostTitleChange}
        />
      </div>
      <div>
        <label htmlFor="gymName">Gym Name:</label>
        <select
          id="gymName"
          value={selectedGym}
          onChange={handleGymChange}
        >
          {gymOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button>Post</button>
    </div>
  );
}

export default PostSection