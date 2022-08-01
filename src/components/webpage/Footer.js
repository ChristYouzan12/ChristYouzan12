import React from "react";
import styled from "styled-components";
import "./Footer.css";
import netflix from "./Netflix Logo.svg";
import shopify from "./Shopify Logo.svg";
import spotify from "./Spotify Logo.svg";
import walmart from "./Walmart Logo.svg";
function Footer() {
  const FooterStyle = styled.img`
    width: 150px;
    margin-right: 40px;
  `;
  return (
    <div className="footer-content">
      <p>Trusted by 3+ million people at companies like</p>
      <div className="img-container">
        <FooterStyle src={netflix} alt="Netflix"></FooterStyle>
        <FooterStyle src={shopify} alt="Netflix"></FooterStyle>
        <FooterStyle src={spotify} alt="Netflix"></FooterStyle>
        <FooterStyle src={walmart} alt="Netflix"></FooterStyle>
      </div>
    </div>
  );
}

export default Footer;
