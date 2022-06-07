import ExpenseItem from "../EXPENSES/ExpenceItem";
import "./Expenses.css";
import Card from "../UI/card";
import { useState } from "react";
import ExpensesFilter from "../NEW EXPENSES/expenseFilter";
import ExpenseList from "../NEW EXPENSES/expensesList";
import ExpenseChart from "./ExpenseChart";

function Expences(props) {
  const [dropdownData, setDropdownData] = useState("2022");
  const [filteredExpense, setFilteredExpenses] = useState(props.expenses);

  const dropdownDataHandler = function (date) {
    setDropdownData(date);
  };
  const filteredExpenses = props.expenses.filter(
    (ele) => ele.expenseDate.getFullYear() == dropdownData
  );

  // console.log(filteredExpense);
  return (
    <div>
      <Card className="expenses-container">
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpensesFilter onDateChange={dropdownDataHandler}></ExpensesFilter>
        <ExpenseList filteredExpenses={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expences;
