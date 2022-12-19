import React from "react";
import { GrLocation } from "react-icons/gr";
import { useState } from "react";
export default function Journey(props) {
  const [currentItem, SetItem] = useState(false);
  const open = () => {
    SetItem(!currentItem);
  };
  return (
    <div className="container">
      {/* template literals */}
      <div
        className={` ${
          currentItem ? "item-selected " : ""
        }   content-container`}
        onClick={open}
      >
        <div className="place--img">
          <img
            className="img--btn"
            src={props.imageUrl}
            alt="places--images"
          ></img>
        </div>
        <div className="location">
          <div className="mini-content">
            <h6 className="location--content">
              {<GrLocation />}
              {props.location}
            </h6>
            <a className="map--content" href={props.googleMapsUrl}>
              <p>view on Google Maps</p>
            </a>
          </div>
          <h1 className="content--title">{props.title}</h1>
          <h5 className="date--content">
            {props.startDate} - {props.endDate}
          </h5>
          <p className="para--content">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
