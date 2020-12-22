import React from "react";
import "./KeyIssues.css";

function KeyIssues() {
  return (
    <div className="issues">
      <p>KEY ISSUES</p>
      <div className="issues__places">
        <button className="issues__btn">
          <strong>
            Wrong Precription
            <small>Kasovo</small>
          </strong>
          <span className="issues__btnkebab"></span>
        </button>

        <button className="issues__btn">
          <strong>
            Opened Late <small>Kiambui</small>
          </strong>
          <span className="issues__btnkebab"></span>
        </button>

        <button className="issues__btn">
          <strong>
            Bad Receipts
            <small>New York</small>
          </strong>
          <span className="issues__btnkebab"></span>
        </button>

        <button className="issues__btn">
          <strong>
            Late Check In
            <small>Mathare</small>
          </strong>
          <span className="issues__btnkebab"></span>
        </button>

        <button className="issues__btn">
          <strong>
            Delay in Lab
            <small>Kiambui</small>
          </strong>
          <span className="issues__btnkebab"></span>
        </button>

        <button className="issues__btn">
          <strong>
            Careless Waste Disposal
            <small>Kiambui</small>
          </strong>
          <span className="issues__btnkebab"></span>
        </button>
      </div>
    </div>
  );
}

export default KeyIssues;
