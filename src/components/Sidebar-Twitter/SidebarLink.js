import React from "react";
import styled from "styled-components";
import "./style.css";
const SidebarLink = ({ text, Icon }) => {
  const Div = styled.div`
    display: flex;
    align-items: center;
    align-items: cover;
    border-radius: 30px;
    height: 35px;
    cursor: pointer;
  `;

  return (
    <Div className="link">
      <Icon />
      <h3>{text}</h3>
    </Div>
  );
};

export default SidebarLink;
