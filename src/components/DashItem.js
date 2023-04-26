import React from "react";

const DashItem = ({ text, icon, active }) => {
  return (
    <div className={active ? "item active" : "item"}>
      <img src={icon} alt="dashboard" />
      <p>{text}</p>
    </div>
  );
};

export default DashItem;
