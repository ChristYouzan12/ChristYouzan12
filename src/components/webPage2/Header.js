import React from "react";
import "./Header.css";
import logo from "./Logo.svg";
export const Header = () => {
  return (
    <nav className="container">
      <img src={logo} alt="logo"></img>
      <div className="mini-container">
        <ul className="menu">
          <li>
            <a href="blank_" target="blank_">
              Home
            </a>
          </li>
          <li>
            <a href="blank_" target="blank_">
              Features
            </a>
          </li>
          <li>
            <a href="blank_" target="blank_">
              Pricing
            </a>
          </li>
        </ul>
        <button id="btn">Subscribe</button>
      </div>
    </nav>
  );
};
