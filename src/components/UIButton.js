import React from "react";
import "./UIButton.css";

export default function UIButton(props) {
  const { btnText } = props;
  return (
    <div className="btn-container">
      <span className="btn-text">{btnText}</span>
    </div>
  );
}
