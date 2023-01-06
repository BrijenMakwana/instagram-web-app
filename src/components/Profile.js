import React from "react";
import "./Profile.css";
import UIButton from "./UIButton";

export default function Profile() {
  return (
    <div className="profile-container">
      {/* image container */}
      <div className="profile-image-container">
        {/* profile image */}
        <img
          src="https://images.unsplash.com/photo-1603570388466-eb4fe5617f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="profile"
          className="profile-image"
        />
      </div>
      {/* user information */}
      <div className="user-info-container">
        <div className="user-info">
          <h1 className="user-tag">aniakubow</h1>
          {/* action buttons */}
          <UIButton btnText="follow" />
          <UIButton btnText="message" />

          {/* 3 dot icon */}
        </div>
        {/* user stats */}
        <div className="user-stats-container">
          <h3 className="state-property">
            <span className="state-value">160</span> posts
          </h3>
          <h3 className="state-property">
            <span className="state-value">56k</span> followers
          </h3>
          <h3 className="state-property">
            <span className="state-value">1,480</span> following
          </h3>
        </div>

        {/* user personal information */}
        <div className="user-personal-container">
          <h4 className="user-name">Ania Kubow</h4>
          <h5 className="user-profession">Education</h5>
          <p className="user-intro">
            I make YouTube videos on how to code (350k+) & non-profit
            @freecodecamp (6mil+) Let's make a difference. Software Dev raised
            in the UAE.
          </p>
        </div>
      </div>
    </div>
  );
}
