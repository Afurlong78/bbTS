import { formatCurrency } from "../../utils/formatCurrency";
import { ExpenseItemTypeProps } from "../../global/Types";
import { useBudgetContext } from "../../context/BudgetProvider";
import { useSignInContext } from "../../context/SignInProvider";
import { useExpenseContext } from "../../context/ExpenseProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./Expense-Styles.scss";

function ExpenseItem(props: ExpenseItemTypeProps) {
  const { theme } = useSignInContext();
  const { budget } = useBudgetContext();
  const { removeExpense } = useExpenseContext();

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={
        theme
          ? "expense-item dark-expense-item"
          : "expense-item light-expense-item"
      }
    >
      <div className="value-row">
        <span>{formatCurrency(props.expense.value)}</span>
      </div>
      <div className="value-row">
        <span>{props.expense.category}</span>
      </div>
      <div className="value-row-end">
        <button
          className={theme ? "dark-text" : "fourth-text"}
          onClick={() => removeExpense(props.expense.id, budget.month)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </motion.div>
  );
}

export default ExpenseItem;
