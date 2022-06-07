import Expences from "../EXPENSES/Expences";
import ExpenseItem from "../EXPENSES/ExpenceItem";
import "./expensesList.css";
const ExpenseList = function (props) {
  if (props.filteredExpenses.length === 0) {
    return (
      <p className="filtered-expenses-fallback">
        {<i className="fa-solid fa-triangle-exclamation"></i>}No expenses found
      </p>
    );
  } else
    return props.filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.expenseItem}
        date={new Date(expense.expenseDate)}
        price={expense.expensePrice}
      ></ExpenseItem>
    ));
};

export default ExpenseList;
