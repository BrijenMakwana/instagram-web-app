import React, { useState } from "react";
import "./Post.css";
import { AiFillHeart } from "react-icons/ai";
import { IoChatbubble } from "react-icons/io5";
import { IoIosPhotos } from "react-icons/io";

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
      {/* multiple images in a post icon */}
      {postImage.length > 1 && (
        <IoIosPhotos
          color="#fff"
          size={20}
          style={{ position: "absolute", marginLeft: 265, marginTop: 8 }}
        />
      )}

      {/* post image */}
      <img src={postImage[0]} alt="post" className="post-image" />
    </div>
  );
}
