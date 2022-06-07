import "./ExpenseDate.css";
function ExpenceDate(props) {
  const month = props.date.toLocaleString(navigator.language, {
    month: "long",
  });
  const day = props.date.toLocaleString(navigator.language, {
    day: "numeric",
  });
  const year = props.date.getFullYear();
  return (
    <div className="expence-item-date">
      <div className="expence-item-date-month">{month}</div>
      <div className="expence-item-date-year">{year}</div>
      <div className="expence-item-date-day">{day}</div>
    </div>
  );
}

export default ExpenceDate;
