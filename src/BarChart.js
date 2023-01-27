import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const BarChart = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const options = {
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Expense Tracker",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "2020 Expense",
        data: [
          7000, 9000, 8000, 9500, 8000, 8400, 8000, 8900, 5600, 7000, 9000,
          7500,
        ],
        backgroundColor: "pink",
      },
      {
        label: "2021 Expense",
        data: [
          9000, 5000, 7500, 9000, 4500, 7500, 7800, 8100, 9600, 5000, 9000,
          8000,
        ],
        backgroundColor: "grey",
      },
    ],
  };
  return (
    <div style={{ height: 400, width: 800, margin: "auto" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
