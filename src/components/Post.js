import React, { useState } from "react";
import "./Post.css";
import { AiFillHeart } from "react-icons/ai";
import { IoChatbubble } from "react-icons/io5";

export default function Post(props) {
  const { postImage, likes, comments } = props;
  const [showPostStats, setShowPostStats] = useState(false);
  return (
    <div
      className="post-container"
      onMouseOver={() => setShowPostStats(true)}
      onMouseOut={() => setShowPostStats(false)}
    >
      {showPostStats && (
        <div className="overlay-stats">
          <div className="post-stats">
            <div className="post-stat">
              <AiFillHeart color="#fff" size={25} />
              <span className="post-likes">{likes}</span>
            </div>
            <div className="post-stat">
              <IoChatbubble color="#fff" size={25} />
              <span className="post-comments">{comments}</span>
            </div>
          </div>
        </div>
      )}

      {/* post image */}
      <img src={postImage} alt="post" className="post-image" />
    </div>
  );
}
