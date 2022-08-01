import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex: row nowrap;
  background-color:beige;
      margin-top: 423px;
    border: 1px solid;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 786px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")}
    top: 0;
    right: 0;
    height: 100vh;
    width:300px;
    padding-top: 3.5rem;
    transition:transform 0.3s ease-in-out;
  }

  li{
    color:#fff;
    border-bottom:1px solid;
  }
`;

function RightNav({ open }) {
  return (
    <Ul open={open}>
      <li>Products</li>
      <li>Challenges</li>
      <li>Resources</li>
      <li>Other Links</li>
    </Ul>
  );
}

export default RightNav;
