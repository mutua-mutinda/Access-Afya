export const footData = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      data: [7, 13, 11, 17, 16.8],
      fill: false,
      borderColor: "rgb(16, 218, 207)",
      radius: 0,
    },
  ],
};
export const footOptions = {
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
