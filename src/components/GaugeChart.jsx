import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const GaugeChart = () => {
  const data = {
    datasets: [
      {
        data: [22, 8], // Values for green and gray sections
        backgroundColor: ["#00FF00", "#D3D3D3"], // Green for progress, Gray for the remainder
        borderWidth: 0, // Remove borders
        cutout: "70%", // Creates the hole in the center
        rotation: 270, // Start gauge from top
        circumference: 180, // Set the gauge to cover half of the chart (180 degrees)
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Disable tooltip
      },
    },
  };

  return (
    <div className="relative w-[350px] h-[200px] border m-2 px-6 overflow-hidden bg-white rounded-xl">
      <h4 className="text-center mb-2">Average Transaction Time</h4>

      {/* <Doughnut data={data} options={options} className="absolute top-[5%]" /> */}
      <div className="flex justify-center items-center">
        <div className="w-[200px] h-[130px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      {/* Centered numeric value inside the chart */}
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 text-2xl font-bold">
        22
      </div>

      {/* 0 and 30 positioned just below the graph */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-between px-20 text-sm">
        <span>0</span>
        <span>30</span>
      </div>
    </div>
  );
};

export default GaugeChart;
