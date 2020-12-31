import React, { useState } from "react";
import "./Monitorperiod.css";
import { Button } from "@material-ui/core";
import { DateRange } from "react-date-range";
import moment from "moment";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Monitorperiod() {
  const [showDate, setShowDate] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    showDateDisplay: true,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const early = moment(startDate).format("D MMM YYYY");
  const continous = moment(endDate).format("D MMM YYYY");

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
        {!showDate || (
          <DateRange
            ranges={[selectionRange]}
            onChange={handleSelect}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={true}
            months={2}
            direction="horizontal"
          />
        )}
        <Button
          className="monitoring__date"
          onClick={() => setShowDate(!showDate)}
        >
          {early} - {continous}
        </Button>
      </div>
    </div>
  );
}

export default Monitorperiod;
