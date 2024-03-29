import React from "react";
import "./Mains.css";
import Article from "../images/MainArticle.png";
import User from "../images/UserAvatar-1.png";
import Card from "./Card";
import data from "./data";
const Main = () => {
  const list = data.map((item) => {
    return (
      <>
        <Card
          key={item.user1.title}
          title={item.user1.title}
          summary={item.user1.summary}
          name={item.user1.name}
          job_title={item.user1.job_title}
          article={item.user1.article}
          img={item.user1.img}
        />
        <Card
          key={item.user2.title}
          title={item.user2.title}
          summary={item.user2.summary}
          name={item.user2.name}
          job_title={item.user2.job_title}
          article={item.user2.article}
          img={item.user2.img}
        />
        <Card
          key={item.user3.title}
          title={item.user3.title}
          summary={item.user3.summary}
          name={item.user3.name}
          job_title={item.user3.job_title}
          article={item.user3.article}
          img={item.user3.img}
        />
      </>
    );
  });
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
      <div className="main-container">{list}</div>
    </div>
  );
};

export default Main;
