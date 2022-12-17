import React from "react";
import "./style.css";
// using props

const Weather = () => {
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  //  Key : db578a81838ea324c38c6d36051191c6
  const key = "da271af6fa1b6309830e70ef2ffe241f";
  const url = `"https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}"`;
  window.addEventListener("load", (event) => {
    console.log("hello");
  });

  // const gettingData = (props) => {
  //   fetch(url)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       } else {
  //         throw new Error("api not working");
  //       }
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const gettingData = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="card-container">
      <h3 className="card-name">Name</h3>
      <img src="/" alt="card-icon"></img>
      <h4 className="card-temp">Temperature</h4>
      <h4 className="card-country">England</h4>
      <h4 className="card-state">state</h4>
      <button onClick={gettingData}>Test</button>
    </div>
  );
};

export default Weather;
