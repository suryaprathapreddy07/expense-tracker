import { React, useState } from "react";
import "./chart.css";
import ChartBar from "./chartBar";
const Chart = (props) => {
  const valuesArrray = props.datapoints.map((datapoint) => datapoint.value);
  const maxValue = Math.max(...valuesArrray);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maxValue}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
