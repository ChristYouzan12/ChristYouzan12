import React from "react";

const MoreItem = ({ text, Icon }) => {
  return (
    <div className="linking">
      <Icon />
      <h3>{text}</h3>
    </div>
  );
};
export default MoreItem;
