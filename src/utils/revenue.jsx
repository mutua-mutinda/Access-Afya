export const revenueData = {
  labels: ["1", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      data: [7, 12, 11, 18, 16],
      fill: false,
      borderColor: "green",
      backgroundColor: "none",
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
  //   align: {
  //     marginLeft: "24px",
  //   },
};
