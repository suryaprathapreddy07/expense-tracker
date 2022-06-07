import { useState } from "react";
import ExpenseForm from "./expenseForm";
import "./newExpense.css";
function NewExpense(props) {
  const [editable, setEditable] = useState(false);
  const expenseHandler = function (expense) {
    const expenseData = {
      ...expense,
      id: `${Math.random()}`,
    };
    props.onNewExpenseChange(expenseData);
    setEditable(false);
  };

  const enableEdit = function () {
    setEditable(true);
  };
  const disableEditf = function () {
    setEditable(false);
  };

  return (
    <div>
      {!editable && (
        <div className="initial-expense-button-div">
          {!editable && (
            <button onClick={enableEdit} className="initial-expense-button">
              Add Expense
            </button>
          )}
        </div>
      )}

      {editable && (
        <ExpenseForm
          onExpenseChange={expenseHandler}
          disableEdit={disableEditf}
        ></ExpenseForm>
      )}
    </div>
  );
}
export default NewExpense;
