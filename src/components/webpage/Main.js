import React from "react";
import "./Main.css";
import img from "./Hero Image.png";
import Capterra from "./Capterra Logo.svg";
import logo from "./AlternativeTo Logo.svg";
function Main() {
  return (
    <div className="main-content">
      <div className="mini-content">
        <h1>Ondeck is your remote</h1>
        <h1 className="h1">conference calling tool</h1>
        <p className="middle">
          Ondeck is a service that allows you to create beautiful, online, and
          encrypted video calls for you and your remote team
        </p>
        <button className="btn">Try for free</button>
        <p>
          5.0 Rating based on reviews from:
          <img className="imgs" src={Capterra} alt="reviews" width="18px"></img>
          <img className="imgs" src={logo} alt="reviews" width="18px"></img>
        </p>
      </div>
      <div className="call-banner">
        <div className="call-img">
          <img src={img} alt="Hero banner"></img>
        </div>
      </div>
    </div>
  );
}

export default Main;
