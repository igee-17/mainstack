import React from "react";
import info from "../assets/images/info.svg";
import GraphBig from "./GraphBig";

const MainGraph = () => {
  return (
    <section className="main-graph">
      <div className="heading">
        <h2>Page Views</h2>
        <img src={info} alt="info" />
      </div>
      <p className="all">All time</p>
      <h1>500</h1>
      <div className="graph">
        <GraphBig />
      </div>
    </section>
  );
};

export default MainGraph;
