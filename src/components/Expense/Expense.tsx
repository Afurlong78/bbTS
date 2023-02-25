import { useBudgetContext } from "../../context/BudgetProvider";
import { useExpenseContext } from "../../context/ExpenseProvider";
import { useSignInContext } from "../../context/SignInProvider";
import { AnimatePresence } from "framer-motion";
import ExpenseItem from "./ExpenseItem";
import "./Expense-Styles.scss";

function Expense() {
  const { budget, expenses } = useBudgetContext();
  const { removeAllExpenses } = useExpenseContext();
  const { theme } = useSignInContext();

  return (
    <div className="expense-container">
      <div className="category-display">
        <div className={theme ? "category dark-text" : "category fourth-text"}>
          Value
        </div>
        <div className={theme ? "category dark-text" : "category fourth-text"}>
          Category
        </div>
        <div
          className={
            theme
              ? "category-display-end dark-text"
              : "category-display-end fourth-text"
          }
        >
          <button
            className={theme ? "dark-button" : "light-button"}
            onClick={() => removeAllExpenses(budget.month)}
          >
            Clear Expenses
          </button>
        </div>
      </div>

      <div className="expense-scroll-wrapper">
        <AnimatePresence>
          {expenses.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} />;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Expense;
