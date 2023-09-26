import React , {useState} from "react";
import HeaderSearch from "../component/HeaderSearch";
import PostSection from "../component/PostSection";
import FeedRender from "../component/FeedRender";



function Post(){
  const [posts, setPosts] = useState([]);

  // Function to add a new post to the posts array
  const addPost = (post) => {
    setPosts([...posts, post]);
    console.log(posts); // Check the console for the updated posts array
  };
  

  return (
    <div className="App">
    <PostSection addPost={addPost} />
    <FeedRender posts={posts} />
    </div>
  );
  }


export default Post