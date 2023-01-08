import React from "react";
import "./UIAuthButton.css";

export default function UIAuthButton(props) {
  const { isSolid, text } = props;
  return (
    <div
      className="ui-auth-btn-container"
      style={{ backgroundColor: isSolid ? "rgb(0, 151, 243)" : "#fff" }}
    >
      <span
        className="ui-auth-btn-text"
        style={{ color: isSolid ? "#fff" : "rgb(0, 151, 243)" }}
      >
        {text}
      </span>
    </div>
  );
}
