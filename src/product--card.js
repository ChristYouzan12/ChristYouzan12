import React from "react";
import "./style.css";

function Card() {
  return (
    <section className="container">
      <div className="card-wrapper">
        <img
          className="img--card"
          src="./prodct.png"
          alt="product images"
        ></img>
        <h3>Product Name</h3>
        <p>From £6.99</p>
      </div>
    </section>
  );
}

export default Card;
