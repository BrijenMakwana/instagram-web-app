import React from "react";
import "./Story.css";

export default function Story(props) {
  const { imageUrl, storyTitle } = props;
  return (
    <div className="story-container">
      <div className="image-container">
        {/* story image */}
        <img src={imageUrl} alt="story" className="story-image" />
      </div>
      {/* story title */}
      <h4 className="story-title">{storyTitle}</h4>
    </div>
  );
}
