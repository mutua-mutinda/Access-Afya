import React from "react";
import { Line } from "react-chartjs-2";
import "./Charts.css";
import { footData, footOptions } from "../utils/footfall";
import { patientData, patientOptions } from "../utils/patientsatisfaction";
import { revenueData, revenueOptions } from "../utils/revenue";

function Charts() {
  return (
    <div className="charts">
      <div className="chart__footfall">
        <p>Foot Fall</p>
        <span>13K</span>
        <small>patients</small>
        <div className="chart__causer1"></div>
        <div className="chart__line">
          <Line data={footData} options={footOptions} />
        </div>
      </div>
      <div className="chart__patientsatisfaction">
        <p>Patient satisfaction</p>
        <span>7.8</span>
        <small>nps</small>
        <div className="chart__causer2"></div>
        <div className="chart__line">
          <Line data={patientData} options={patientOptions} />
        </div>
      </div>
      <div className="chart__revenue">
        <p>Revenue</p>
        <span>4.2M</span>
        <small>Kenya Shillings</small>
        <div className="chart__causer3"></div>
        <div className="chart__line">
          <Line data={revenueData} options={revenueOptions} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
