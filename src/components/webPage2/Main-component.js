import React from "react";
import { Header } from "./Header";
import "./Main.css";
import Main from "./Main";
import Logo from "./Logo.svg";

const Main_components = () => {
  return (
    <div className="containers">
      <Header />
      <Main />
      <footer className="footer-content">
        <img src={Logo} alt="logo"></img>
        <p>Unifeed © 2017 All Copyrights Not Reserved</p>
      </footer>
    </div>
  );
};

export default Main_components;
