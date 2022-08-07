import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./Logo.svg";
import Menu from "./HamburgerMenu.svg";
import { RightNav } from "./RightNav";

export const Header = () => {
  const clicks = () => {
    alert("thank you for click susbcribe");
  };

  const [open, setOpen] = useState(false);
  const click = () => {
    setOpen(!open);
  };
  const media = 767;
  const [isMobile, setMobile] = useState(null);

  const handleResize = () => {
    setMobile(window.innerWidth <= media);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="container">
      <img src={logo} alt="logo"></img>
      {!isMobile ? (
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
          <button id="btn" onClick={clicks}>
            Subscribe
          </button>
        </div>
      ) : (
        <div className="hamburger">
          <button className="btn-wrapper" onClick={click}>
            <img src={Menu} alt="Hamburger" className="hamburger"></img>
          </button>
          <RightNav open={open} />
        </div>
      )}
    </nav>
  );
};
