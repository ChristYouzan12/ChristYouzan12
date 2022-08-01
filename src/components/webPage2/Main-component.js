import React from "react";
import { Header } from "./Header";
import "./Main.css";
import Main from "./Main";
import data from "./data";
const Main_components = () => {
  const list = data.map((item) => {
    return (
      <>
        <Main
          key={item.user1.title}
          title={item.user1.title}
          summary={item.user1.summary}
          article={item.user1.article}
          user={item.user1.user}
        />
        <Main
          key={item.user2.title}
          title={item.user2.title}
          summary={item.user2.summary}
          article={item.user2.article}
          user={item.user2.user}
        />
        <Main
          key={item.user3.title}
          title={item.user3.title}
          summary={item.user3.summary}
          article={item.user3.article}
          user={item.user3.user}
        />
      </>
    );
  });
  return (
    <div className="containers">
      <Header />
      {list}
    </div>
  );
};

export default Main_components;
