import React from "react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Datepicker() {
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
    console.log("ranges", ranges);
  }

  return (
    <div>
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        direction="horizontal"
      />
      ;
    </div>
  );
}

export default Datepicker;
