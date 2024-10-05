import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Waiting",
    pv: 90,
  },
  {
    name: "Total Served",
    pv: 34,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props; // Get height to adjust y position
  const radius = 12;

  return (
    <g>
      <circle cx={x + width / 2} cy={y + height / 2} r={radius} fill="white" />
      <text
        x={x + width / 2}
        y={y + height / 2}
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  );
};

export default function App() {
  return (
    <BarChart
      width={350}
      height={200}
      data={data}
      className=" bg-white rounded-xl px-5 border"
    >
      <CartesianGrid strokeDasharray="4" vertical={false} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="pv" fill="#8884d8" minPointSize={5} barSize={50}>
        <LabelList dataKey="pv" content={renderCustomizedLabel} />
      </Bar>
    </BarChart>
  );
}
