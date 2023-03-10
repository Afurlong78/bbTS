import { useState } from "react";
import { useBudgetContext } from "../../context/BudgetProvider";
import { useExpenseContext } from "../../context/ExpenseProvider";
import { useSignInContext } from "../../context/SignInProvider";
import { formatCurrency } from "../../utils/formatCurrency";
import GetBudgetDropDown from "../DropDown/GetBudgetDropDown";
import CategoryDropDown from "../DropDown/CategoryDropDown";
import "./Budget-Styles.scss";

function Budget() {
  const { budget, postBudget, budgetInput, setBudgetInput, budgetError } =
    useBudgetContext();
  const { postExpense, spent, expenseInput, setExpenseInput, expenseError } =
    useExpenseContext();
  const { theme } = useSignInContext();
  const [category, setCategory] = useState<string>("Entertainment");
  const remaining = budget.value - spent;

  return (
    <div className="budget-container">
      <div
        className={
          theme
            ? "current-month-view dark-text"
            : "current-month-view fourth-text"
        }
      >
        <div className="item">
          Current Budget:
          <strong>{budget.month}</strong>
        </div>

        <div className="item">
          <div>Get Budget:</div>
          <GetBudgetDropDown />
        </div>
      </div>

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
          style={{ background: "#48da85", color: "#184e2f" }}
        >
          Spent:
          <strong>
            <span>{formatCurrency(spent)}</span>
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
      </div>

      <div className="inputs-display">
        <div className="inputs">
          <span className={theme ? "dark-text" : "fourth-text"}>Budget</span>

          <div className="error-column">
            <div className="input-wrapper">
              <input
                onChange={(e) => setBudgetInput(e.target.value)}
                className={theme ? "input-dark" : "input-light"}
                placeholder="Submit your budget..."
                value={budgetInput}
                type="number"
              />
              <button
                onClick={() => postBudget(parseInt(budgetInput), budget.month)}
                className={theme ? "dark-button" : "light-button"}
              >
                Submit
              </button>
            </div>
            {budgetError.error ? (
              <p className="error">{budgetError.errorMessage}</p>
            ) : (
              <p className="error"></p>
            )}
          </div>
        </div>

        <div className="inputs">
          <span className={theme ? "dark-text" : "fourth-text"}>Expense</span>

          <div className="error-column">
            <div className="input-wrapper">
              <input
                onChange={(e) => setExpenseInput(e.target.value)}
                className={theme ? "input-dark" : "input-light"}
                type="number"
                placeholder="Submit your expenses..."
                value={expenseInput}
              />
              <button
                onClick={() =>
                  postExpense(parseInt(expenseInput), budget.month, category)
                }
                className={theme ? "dark-button" : "light-button"}
              >
                Submit
              </button>
              <div className="inside">
                <CategoryDropDown
                  category={category}
                  setCategory={setCategory}
                />
              </div>
            </div>
            {expenseError.error ? (
              <p className="error">{expenseError.errorMessage}</p>
            ) : (
              <p className="error"></p>
            )}
          </div>
        </div>

        <div className="outside" style={{ marginBottom: "2rem" }}>
          <CategoryDropDown category={category} setCategory={setCategory} />
        </div>
      </div>
    </div>
  );
}

export default Budget;
