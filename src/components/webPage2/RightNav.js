import React from "react";
import Styled from "styled-components";

export const RightNav = ({ open }) => {
  const styling = {
    position: "absolute",
    top: "224px",
    right: "34px",
  };
  const Div = Styled.div`
    display: ${({ open }) => (open ? "block" : "none")};
    background: #fff;
    height: 100%;
    width: 200px;
    position:absolute;
    top: 55px;
    right: 53px;
    z-index:20;
    `;
  const Ul = Styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    /* padding: 10px 0; */
    /* margin: 10px 0; */
    /* justify-content: center; */
    height: 100%;


    {Ul} > li {
      padding: 10px;
      border-bottom: 1px solid gray;
    }


  {Ul} > li:hover {
background-color:blue;
color: #fff;
    }
    `;
  return (
    <Div open={open}>
      <Ul>
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
      </Ul>
      <button style={styling} id="btn">
        Subscribe
      </button>
    </Div>
  );
};
