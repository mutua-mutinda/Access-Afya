import React, { useState } from "react";
import "./Monitorperiod.css";
import Datepicker from "./Datepicker";
import { Button } from "@material-ui/core";

function Monitorperiod() {
  const [showDate, setShowDate] = useState(false);
  console.log("date", showDate);
  return (
    <div className="monitoring">
      <p>MONITORING PERIOD</p>
      <div className="monitoring__period">
        <button>Day</button>
        <button>Week</button>
        <button>Month</button>
        <button>Year</button>
      </div>
      <div className="monitoring__datepicker">
        {showDate || <Datepicker />}
        <Button
          className="monitoring__date"
          onClick={() => setShowDate(!showDate)}
        >
          dates
        </Button>
      </div>
    </div>
  );
}

export default Monitorperiod;
