import React from "react";
import Sidebar from "./Sidebar";
import "./style.css";

import Button from "@mui/material/Button";
import Side from "./Side";

const App = () => {
  return (
    <div className="main-container">
      <Button>Hello world</Button>
      <Sidebar />
      <Side />
    </div>
  );
};

export default App;
