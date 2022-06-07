import logo from "./logo.svg";
import "./App.css";
import Expences from "./components/EXPENSES/Expences";
import NewExpense from "./components/NEW EXPENSES/newExpense";
import ExpenseForm from "./components/NEW EXPENSES/expenseForm";
import ExpensesFilter from "./components/NEW EXPENSES/expenseFilter";
import { useState } from "react";

const date = new Date();
const initialExpenses = [];

function App() {
  const [allexpenses, setExpense] = useState(initialExpenses);
  const expenseHandler = function (expense) {
    setExpense((prev) => {
      return [expense, ...prev];
    });
    // console.log(allexpenses);
  };
  // console.log(allexpenses);

  return (
    <div>
      <NewExpense onNewExpenseChange={expenseHandler}></NewExpense>
      <Expences expenses={allexpenses}></Expences>
    </div>
  );
}

export default App;
