import { useState } from "react";
import "./Budget-Styles.scss";
import { useBudgetContext } from "../../context/BudgetProvider";
import { useExpenseContext } from "../../context/ExpenseProvider";
import { useSignInContext } from "../../context/SignInProvider";
import { formatCurrency } from "../../utils/formatCurrency";
import DropDown from "../BootStrap/DropDown/DropDown";

function Budget() {
  const { budget, postBudget, budgetInput, setBudgetInput } =
    useBudgetContext();
  const { postExpense, spent } = useExpenseContext();
  const { theme } = useSignInContext();
  const [month, setMonth] = useState<string>("January");
  const [expenseInput, setExpenseInput] = useState<number>(0);
  const remaining = budget.value - spent;

  return (
    <div className="budget-container">
      <div className="values-display">
        <div
          className="value"
          style={{ background: "#7794f5", color: "#39436e" }}
        >
          Budget:
          <strong>
            <span>{formatCurrency(budget?.value)}</span>
          </strong>
        </div>
        <div
          className="value"
          style={{ background: "#ff7676", color: "#6d2e2e" }}
        >
          Remaining:
          <strong>
            <span>{formatCurrency(remaining)}</span>
          </strong>
        </div>
        <div
          className="value"
          style={{ background: "#48da85", color: "#184e2f" }}
        >
          Spent:
          <strong>
            <span>{formatCurrency(spent)}</span>
          </strong>
        </div>
      </div>

      <div className="inputs-display">
        <div className="inputs">
          <span>Budget</span>

          <div className="input-wrapper">
            <input
              onChange={(e) => setBudgetInput(e.target.value)}
              className="input"
              type="number"
              placeholder="Submit your budget..."
            />
            <button
              onClick={() => postBudget(parseInt(budgetInput), month)}
              className={theme ? "dark-primary-button" : "light-primary-button"}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="inputs">
          <span>Expense</span>

          <div className="input-wrapper">
            <input
              onChange={(e) => setExpenseInput(parseInt(e.target.value))}
              className="input"
              type="number"
              placeholder="Submit your expenses..."
            />
            <button
              onClick={() => postExpense(expenseInput, month)}
              className={theme ? "dark-primary-button" : "light-primary-button"}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="dropdown-container">
          <DropDown month={month} setMonth={setMonth} />
        </div>
      </div>
    </div>
  );
}

export default Budget;
