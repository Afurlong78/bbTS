import Budget from "../Budget/Budget";
import Expense from "../Expense/Expense";
import "./BudgetUI-Styles.scss";

function BudgetUI() {
  const storedToken = localStorage.getItem("bb-login-token");

  return (
    <div className="budget-container">
      {!storedToken ? (
        <div>You dont have permission to view this page, please login.</div>
      ) : (
        <div className="ui-wrapper">
          <Budget />
          <Expense />
        </div>
      )}
    </div>
  );
}

export default BudgetUI;
