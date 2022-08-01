import React from "react";
import "./burger.css";
import { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import Menu from "./Menu.svg";
import Close from "./Close.svg";

const StyledBurger = styled.div`
  top: 54px;
  right: 59px;
  position: fixed;
  height: 18px;
  display: none;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  z-index: 20;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  @media screen and (max-width: 786px) {
    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ open }) => (open ? "#fff" : "black")};
      border-radius: 10px;
      border: none;
      transform-origin: 1px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
function Hamburger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={Menu} alt="Menu"></img>
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
}

export default Hamburger;
