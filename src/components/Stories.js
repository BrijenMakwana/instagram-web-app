import React from "react";
import "./Stories.css";
import Story from "./Story";
import { stories } from "../assets/data/data";

export default function Stories() {
  return (
    <div className="stories-container">
      {stories.map((item) => (
        <Story
          key={item.id}
          imageUrl={item.imageUrl}
          storyTitle={item.storyTitle}
        />
      ))}
    </div>
  );
}
