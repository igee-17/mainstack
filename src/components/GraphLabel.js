import React from "react";
import nigeria from "../assets/images/nigeria.svg";

const GraphLabel = ({ country, count, percent, color }) => {
  return (
    <div className="graph-label">
      <img src={nigeria} alt="flag" />
      <p>
        {country} {percent}%{" "}
      </p>
      <span
        style={{
          backgroundColor: color,
        }}
      ></span>
    </div>
  );
};

export default GraphLabel;
