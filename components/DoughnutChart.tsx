"use client";
import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Amnt",
        data: [135346.56, 11188.11, 21967, 7277.84],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa", "#0080ff"],
      },
    ],
    labels: ["ICICI", "HDFC", "PNB", "SBI"],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
