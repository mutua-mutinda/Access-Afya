export const revenueData = {
  labels: ["1", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      data: [7, 12, 11, 18, 16],
      fill: false,
      borderColor: "rgb(16, 218, 207)",
      radius: 0,
    },
  ],
};
export const revenueOptions = {
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
