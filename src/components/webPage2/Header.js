import React, {useEffect, useState}  from "react";
import "./Header.css";
import logo from "./Logo.svg";
import Menu from "./HamburgerMenu.svg"
export const Header = () => {
  
  const media = 1064;
  const [isMobile, setMobile] = useState(null);

  const handleResize = () =>{
    setMobile(window.innerWidth <= media);
  }
  
  useEffect(()=> {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize)
  }, []);
  
  return (
    <nav className="container">
     <img src={logo} alt="logo">
      </img>
     { !isMobile ? (<div className="mini-container">
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
      </div>   ): (
    <img src={Menu} alt="Hamburger" className="hamburger"></img>)}
    </nav>
  );
};

