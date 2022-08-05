import React from "react";


const Card = (prop) => {
    return (
        <div className="items">
        <img src={prop.article} alt="banner" width="210px"></img>
        <h2>{prop.title}</h2>
        <p>{prop.summary}</p>
        <div className="profile">
          <img src={prop.user} alt="template" width="40px"></img>
          <div className="profile-card">
            <h4>{prop.name}</h4>
            <p>{prop.job_title}</p>
          </div>
        </div>
      </div>
    );
}

export default Card;