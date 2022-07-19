import React from "react";

export default function CountDown() {
  const items = document.querySelectorAll(".items");

  return (
    <section className="container">
      <div className="items days">
        34
        <span>Days</span>
      </div>
      <div className="items hours">
        10items
        <span>hours</span>
      </div>
      <div className="items minutes">
        2<span>minutes</span>
      </div>
      <div className="items seconds">
        50<span>second</span>
      </div>
    </section>
  );
}
