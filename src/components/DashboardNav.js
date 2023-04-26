import React from "react";
import logo from "../assets/images/mainstack-logo.png";
import { groupOne, groupThree, groupTwo } from "../utils/data";
import DashItem from "./DashItem";
import person from "../assets/images/person.png";
import moreHoriz from "../assets/images/more_horiz.svg";

const DashboardNav = () => {
  return (
    <div className="left">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="group">
        {groupOne.map((item) => (
          <DashItem {...item} />
        ))}
      </div>
      <div className="group">
        <h2>others 1</h2>
        {groupTwo.map((item) => (
          <DashItem {...item} />
        ))}
      </div>
      <div className="group">
        <h2>others 2</h2>
        {groupThree.map((item) => (
          <DashItem {...item} />
        ))}
      </div>

      <div className="profile">
        <img src={person} alt="person" className="person" />
        <p>Blessing Daniels</p>
        <img src={moreHoriz} alt="moreHoriz" />
      </div>
    </div>
  );
};

export default DashboardNav;
