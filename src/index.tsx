import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Template from "./components/Template-card/Template";
// import Apps from "./components/webpage/Apps";
// import App from "./components/Weather/App";

import Journey from "./components/Journey/App";

const data = document.getElementById("root")!;
const root = ReactDOM.createRoot(data);
root.render(<Journey />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
