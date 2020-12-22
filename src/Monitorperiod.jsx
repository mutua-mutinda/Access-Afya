import React from "react";
import "./Monitorperiod.css";

function Monitorperiod() {
  return (
    <div className="monitoring">
      <p>MONITORING PERIOD</p>
      <div className="monitoring__period">
        <button>Day</button>
        <button>Week</button>
        <button>Month</button>
        <button>Year</button>
      </div>
    </div>
  );
}

export default Monitorperiod;
