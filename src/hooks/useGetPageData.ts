import { useEffect, useCallback } from "react";
import { useExpenseContext } from "../context/ExpenseProvider";
import { useBudgetContext } from "../context/BudgetProvider";

export const useGetPageData = (url: any) => {
  const { getBudget } = useBudgetContext();
  const { getExpense } = useExpenseContext();
  const memoizedGetBudget = useCallback(getBudget, []);
  const memoizedGetExpense = useCallback(getExpense, []);

  if (url.includes("budgets")) {
    memoizedGetBudget();
  }

  if (url.includes("expenses")) {
    memoizedGetExpense();
  }

  return () => {
    console.log("goodbye");
  };
};
