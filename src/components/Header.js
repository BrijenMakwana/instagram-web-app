import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import UIAuthButton from "./UIAuthButton";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <span className="logo-text">instagram</span>
        <SearchBar />

        {/* log in/out buttons */}
        <div className="auth-btns">
          <UIAuthButton isSolid={true} text="Log in" />
          <UIAuthButton isSolid={false} text="Sign up" />
        </div>
      </div>
    </header>
  );
}
