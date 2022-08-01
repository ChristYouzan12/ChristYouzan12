import React from "react";
import "./Nav.css";
import Hamburger from "./Hamburger";
import logo from "./Logo.svg";

function Nav() {
  return (
    <nav className="header">
      <img src={logo} alt="logo"></img>
      <ul className="menu">
        <li>
          <a href="#"></a>Products
        </li>
        <li>
          <a href="#"></a>Challenges
        </li>
        <li>
          <a href="#"></a>Resources
        </li>
        <li>
          <a href="#"></a>Other Links
        </li>
      </ul>
      <div className="btn-container">
        <a href="./#">Sign in</a>
        <button className="btn-free">Try for free</button>
      </div>
      <div className="pop-up">
        <h3>Products</h3>
        <h4>Spense</h4>
        <p>Ondeck is a service that allows you to create beautiful</p>
        <h4>Fiber Landing Page</h4>
        <p>Ondeck is a service that allows you to create beautiful</p>
        <h4>Gradle Sign Up Page</h4>
        <p>Ondeck is a service that allows you to create beautiful</p>
      </div>
      <Hamburger />
    </nav>
  );
}

export default Nav;
