import React from "react";
import { Line } from "react-chartjs-2";
import "./Charts.css";

function Charts() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        // label: "",
        data: [12, 19, 5, 0],
        fill: false,
        borderColor: "green",
      },
    ],
  };
  console.log("dataset>>", data);
  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            drawOnChartArea: false,
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          display: false,
          gridLines: {
            display: false,
          },
        },
      ],
    },
    tooltips: {
      enabled: false,
    },
    align: {
      marginLeft: "14px",
    },
  };

  return (
    <div className="charts">
      <div className="chart__footfall">
        <p>Foot Fall</p>
        <span>13K</span>
        <small>patients</small>
        <div className="chart__causer1"></div>
        <div className="chart__line">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="chart__patientsatisfaction">
        <p>Patient satisfaction</p>
        <span>7.8</span>
        <small>nps</small>
        <div className="chart__causer2"></div>
        <div className="chart__line">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="chart__revenue">
        <p>Revenue</p>
        <span>4.2M</span>
        <small>Kenya Shillings</small>
        <div className="chart__causer3"></div>
        <div className="chart__line">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
