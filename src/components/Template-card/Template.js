import React, { useRef } from "react";
import "./Template.css";
import styled from "styled-components";
import User from "./User Avatar.svg";

const Template = () => {
  const el = document.getElementsByClassName("inp");
  const notify = () => {
    alert("thanks for Sign in" + el.innerHTML);
  };
  const inputEl = useRef(null);
  // const focusIn = () => {
  //   inputEl.current.focus();
  // };
  const Style = styled.p`
    padding: 16px 0;
    text-align: start;
  `;

  return (
    <div className="wrapper-container">
      <div className="top-container">
        <h3>Creating email template has never been easier.</h3>
      </div>
      <div>
        <p>
          Receive daily emails on how to best create email templates, completely
          free.
        </p>
        <input
          type="email"
          placeholder="Email Address"
          name="inputs"
          className="inp"
          ref={inputEl}
        ></input>
        <button className="btn" value="Subscribe" onClick={notify}>
          Subscribe
        </button>
        <Style>
          <p>No spam, ever. Unsubscribe anytime.</p>
        </Style>
      </div>

      <div className="profile-card">
        <img src={User} alt="images"></img>
        <span>
          <h4>Andrew Vickins</h4>
          <p>Newsletter Designer</p>
        </span>
      </div>
      <div>
        <p className="review">
          "By far one of the best newsletter I've ever subscribed to. It is sent
          biweekly and i'm always looking forward to their emails."
        </p>
      </div>
    </div>
  );
};

export default Template;
