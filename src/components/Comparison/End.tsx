import React from "react";
import { useSignInContext } from "../../context/SignInProvider";
import { useBudgetContext } from "../../context/BudgetProvider";
import ComparisonItem from "./Comparison-item";
import GetEnd from "../DropDown/GetStart";

function End() {
  const { theme } = useSignInContext();
  const { expenses } = useBudgetContext();

  return (
    <div className="compare-item-container">
      <div className="expense-container">
        <div className="category-display">
          <div
            className={theme ? "category dark-text" : "category fourth-text"}
          >
            Value
          </div>
          <div
            className={theme ? "category dark-text" : "category fourth-text"}
          >
            Category
          </div>
          <div
            className={
              theme
                ? "category-display-end dark-text"
                : "category-display-end fourth-text"
            }
          >
            <GetEnd />
          </div>
        </div>

        <div className="expense-scroll-wrapper">
          {expenses.map((expense) => {
            return <ComparisonItem key={expense.id} expense={expense} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default End;
