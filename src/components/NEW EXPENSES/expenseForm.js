import { useState } from "react";
import Card from "../UI/card";
import "./expenseForm.css";
function ExpenseForm(props) {
  //   console.log(props);
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleChangeHandler = function (event) {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };

  const dateChangeHandler = function (event) {
    // console.log(event.target.value);
    setDate(event.target.value);
  };

  const amountChangeHandler = function (event) {
    // console.log(event.target.value);
    setAmount(event.target.value);
  };

  const formHandler = function (event) {
    event.preventDefault();
    const expenseData = {
      expenseItem: enteredTitle,
      expensePrice: +enteredAmount,
      expenseDate: new Date(enteredDate),
    };
    // console.log(expenseData);
    // clearing input fields
    setAmount("");
    setTitle("");
    setDate("");

    // sending expense data to parent
    props.onExpenseChange(expenseData);
  };
  return (
    <div className="expense-form">
      <form onSubmit={formHandler}>
        <div className="expense-form-controls">
          <div className="expense-form-control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0"
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="expense-form-control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="expense-form-control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
        </div>
        <div className="expense-form-actions">
          <div className="expense-form-action">
            <button type="button" onClick={props.disableEdit}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ExpenseForm;
