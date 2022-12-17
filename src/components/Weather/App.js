import React from "react";
import Weather from "./Weather";
// import styledComponents from "styled-components";
import "./style.css";
import styledComponents from "styled-components";
const App = () => {
  const DivContainer = styledComponents.div`
    width: 260px;
    border-radius: 4px;
    height: 350px;
    box-shadow: 0 0 3px 4px #d6d6d6

  `;

  const Input = styledComponents.input`
  width: 400px;
  height: 40px;
  border: 1px solid;
  border-radius: 4px;
  padding: 10px;
  `;

  const Btn = styledComponents.button`
  
  width: 130px;
  height: 40px;
  padding:10px;
  margin: 0 0 0 10px;
  border-radius : 4px;
  border: 1px solid;
  background: #0e69ff;
  cursor: pointer;
  `;

  return (
    <div className="container">
      <div className="mini-container">
        <h1>Weather App</h1>
        <Input
          type="search"
          name="w-search"
          id="w-input"
          placeholder="Please search for a country"
        ></Input>
        <Btn id="btn"> search</Btn>
      </div>
      <DivContainer>{<Weather />}</DivContainer>
    </div>
  );
};

export default App;
