import React, { useState } from "react";
import PostSection from "../component/PostSection";
import FeedRender from "../component/FeedRender";

function Post() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="post-page">
      <PostSection onPost={addPost} />
      <FeedRender posts={posts} />
    </div>
  );
}

export default Post;
