import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = "Seguro de Auto";
  const expensiveAmount = 200;
  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expensiveAmount}</div>
      </div>
    </div>
  );
}
a
export default ExpenseItem;
