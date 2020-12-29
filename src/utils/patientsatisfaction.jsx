export const patientData = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      data: [7, 19, 15, 10, 7],
      fill: false,
      borderColor: "red",
      radius: 0,
    },
  ],
};
export const patientOptions = {
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
};
