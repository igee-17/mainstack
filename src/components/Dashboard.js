import React, { useEffect, useState } from "react";
import { graphData } from "../utils/data";
import DashboardNav from "./DashboardNav";
import ChartComponent from "./Donut";
import GraphLabel from "./GraphLabel";
import MainGraph from "./MainGraph";

const Dashboard = () => {
  const [others, setOthers] = useState(100);
  const [data, setData] = useState({});
  // const [top_locations, setTopLocations] = useState([]);
  // const [top_sources, setTopSources] = useState([]);

  const { top_locations, top_sources } = graphData;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://fe-task-api.mainstack.io");
  //     const data = response.json();
  //     setData(data);
  //     console.log(data);
  //     setTopLocations(data.top_locations);
  //     setTopSources(data.top_sources);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    let otherLocations = 100;

    top_locations.forEach((location) => {
      otherLocations -= location.percent;
      setOthers(otherLocations);
    });

    top_locations.forEach((location) => {
      // Generate a random color in hexadecimal format
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      location.color = randomColor; // Add the color property to the location object
      location.label = location.country; // Add the label property to the location object
      location.value = location.count; // Add the value property to the location object
    });

    top_sources.forEach((location) => {
      otherLocations -= location.percent;
      setOthers(otherLocations);
    });

    top_sources.forEach((location) => {
      // Generate a random color in hexadecimal format
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      location.color = randomColor; // Add the color property to the location object
      location.label = location.source; // Add the label property to the location object
      location.value = location.count; // Add the value property to the location object
    });

    console.log(top_locations);
  }, []);

  return (
    <section className="dashboard-main">
      <DashboardNav />
      <div className="right">
        <div className="header">
          <h1>dashboard</h1>
        </div>
        <div className="greeting">
          <div className="text">
            <h2>Good morning, Blessing ⛅️</h2>
            <p>Check out your dashboard summary.</p>
          </div>
          <p className="view">View analytics</p>
        </div>
        <div className="dates">
          <span className="date-item">1 day</span>
          <span className="date-item">3 days</span>
          <span className="date-item">7 days</span>
          <span className="date-item">30 days</span>
          <span className="date-item active">all time</span>
          <span className="date-item">custom date</span>
        </div>
        <MainGraph />
        <div className="bottom-graph">
          <div className="left">
            <div className="text">
              <h2>Top Locations</h2>
              <p>View full reports</p>
            </div>
            <div className="graph-center">
              {/* <div className="labels">
                {top_locations.map((item) => (
                  <GraphLabel {...item} />
                ))}
                <div className="graph-label">
                  <div className="space"></div>
                  <p>Others {others}%</p>
                  <span></span>
                </div>
              </div> */}
              <div className="donut">
                <ChartComponent data={top_locations} />
              </div>
            </div>
          </div>
          <div className="left">
            <div className="text">
              <h2>Top Referral source</h2>
              <p>View full reports</p>
            </div>
            <div className="graph-center">
              {/* <div className="labels">
                {top_locations.map((item) => (
                  <GraphLabel {...item} />
                ))}
                <div className="graph-label">
                  <div className="space"></div>
                  <p>Others {others}%</p>
                  <span></span>
                </div>
              </div> */}
              <div className="donut">
                <ChartComponent data={top_sources} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
