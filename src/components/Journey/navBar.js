import React from "react";
import styled from "styled-components";
import Links from "./Links";
import { Outlet } from "react-router-dom";
export default function NavBar() {
  const Div = styled.div`
    border-bottom: 1px solid gray;
  `;

  return (
    <div>
      <div className="banner--container">
        <div>
          <GrMapLocation className="icon--banner" />
        </div>
        <h2>travel Journey</h2>
      </div>
      <Div>
        <Links />
      </Div>
      <section className="page-content">
        <Outlet />
      </section>
    </div>
  );
}
