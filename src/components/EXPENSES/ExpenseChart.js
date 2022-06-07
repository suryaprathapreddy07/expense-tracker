import React from "react";
import Chart from "../CHART/chart";
const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (let i = 0; i < props.expenses.length; i++) {
    const month = new Date(props.expenses[i].expenseDate).getMonth();
    chartDataPoints[month].value += Number(props.expenses[i].expensePrice);
  }
  return <Chart datapoints={chartDataPoints}></Chart>;
};
export default ExpenseChart;
