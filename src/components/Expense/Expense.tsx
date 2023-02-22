import React, { useCallback, useState } from "react";
import { useGetPageData } from "../../hooks/useGetPageData";
import { useExpenseContext } from "../../context/ExpenseProvider";
import ExpenseItem from "./ExpenseItem";
import "./Expense-Styles.scss";

function Expense() {
  const expenseLink = process.env.REACT_APP_USER_EXPENSES!;
  // useGetPageData(expenseLink);
  const { expenses } = useExpenseContext();
  return (
    <div className="expense-container">
      {expenses.map((expense, index) => {
        return <ExpenseItem key={index} />;
      })}
    </div>
  );
}

export default Expense;
