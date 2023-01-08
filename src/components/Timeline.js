import React from "react";
import Post from "./Post";
import "./Timeline.css";
import { posts } from "../assets/data/data";

export default function Timeline() {
  return (
    <div className="timeline-container">
      {/* posts */}
      {posts.map((item) => (
        <Post
          key={item.id}
          postImage={item.postImage}
          likes={item.likes}
          comments={item.comments}
        />
      ))}
    </div>
  );
}
