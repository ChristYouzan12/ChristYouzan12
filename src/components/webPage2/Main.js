import React from "react";
import "./Mains.css";
import Article from "./Main Article Image.png";
import User from "./User Avatar.png";
const Main = (prop) => {
  return (
    <div className="wrapper">
      <div className="items-one">
        <div className="mini">
          <div className="img-container  ">
            <img src={Article} alt="banner"></img>
          </div>
          <div className="title-container">
            <h1 className="title">
              Weekly Newsletter: Tweets for Higher Engagements
            </h1>
            <p className="title-content">
              In this weekly newsletter, we will be covering ten types of
              engaging tweets. This is the guide if you're just starting out on
              Twitter.
            </p>
            <div className="profile">
              <img src={User} alt="template" width="40px"></img>

              <div>
                <h4>Jessica Andrews</h4>
                <p>Content Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items">
        <img src={prop.article} alt="banner" width="210px"></img>
        <h2>{prop.title}</h2>
        <p>{prop.summary}</p>
        <div className="profile">
          <img src={prop.user} alt="template" width="40px"></img>

          <div>
            <h4>Spencer David</h4>
            <p>SEO Specialist</p>
          </div>
        </div>
      </div>
      <div className="items">
        <img src={prop.article} alt="banner" width="210px"></img>
        <h2>{prop.title}</h2>
        <p>{prop.summary}</p>
        <div className="profile">
          <img src={prop.user} alt="template" width="40px"></img>

          <div>
            <h4>Sara Frey</h4>
            <p>Business Leader</p>
          </div>
        </div>
      </div>
      <div className="items">
        <img src={prop.article} alt="banner" width="210px"></img>
        <h2>{prop.title}</h2>
        <p>{prop.summary}</p>
        <div className="profile">
          <img src={prop.user} alt="template" width="40px"></img>

          <div>
            <h4>David Suns</h4>
            <p>Brand Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
