import React from "react";
import { Header } from "./Header";
import "./Main.css";
import Main from "./Main";
import Logo from "./Logo.svg";
import Styled from "styled-components";
const Main_components = () => {
  const Style = Styled.footer`

  display:flex;
  justify-content: space-between;
  margin-top: 50px;

  @media screen and (max-width:1062px){
{Style} > p {
    font-size:12px;
    font-weight: 100;
  }
  `;

  const Parent = Styled.div`
  display:flex;
  justify-content:space-evenly;
  flex-direction:column;
  height:90%

}
  `;
  return (
    <div className="containers">
      <Header />
      <Parent>
        <Main />
        <Style>
          <img src={Logo} alt="logo"></img>
          <p> Unifeed © 2017 All Copyrights Not Reserved</p>
        </Style>
      </Parent>
    </div>
  );
};

export default Main_components;
