import React from "react";
import "./Monitorperiod.css";

function Monitorperiod() {
  const date = new Date().getFullYear();

  return (
    <div className="monitoring">
      <p>MONITORING PERIOD</p>
      <div className="monitoring__period">
        <button>Day</button>
        <button>Week</button>
        <button>Month</button>
        <button>Year</button>
      </div>
      <button className="monitoring__date">{date}</button>
    </div>
  );
}

export default Monitorperiod;
