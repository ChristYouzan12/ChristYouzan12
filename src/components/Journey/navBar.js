import React from "react";
import { GrMapLocation } from "react-icons/gr";

export default function NavBar() {
  return (
    <div className="banner--container">
      <div>
        <GrMapLocation className="icon--banner" />
      </div>
      <h2>travel Journey</h2>
    </div>
  );
}
