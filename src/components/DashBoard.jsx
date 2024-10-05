import React from "react";
import BarChart from "./BarChart";
import GaugeChart from "./GaugeChart";

function DashBoard() {
  return (
    <div>
      <div class="grid grid-cols-4 gap-4 px-5 items-center">
        <BarChart />
        <GaugeChart />
        <GaugeChart />
        <GaugeChart />
      </div>
    </div>
  );
}

export default DashBoard;
