import { useState } from "react";
import { useBudgetContext } from "../context/BudgetProvider";
import { useExpenseContext } from "../context/ExpenseProvider";
import axios from "axios";

export const useGetMonthData = () => {
  const { setBudget, setExpenses } = useBudgetContext();
  const {} = useExpenseContext();
  const monthLink = process.env.REACT_APP_USER_BUDGETS_MONTH!;
  const token = localStorage.getItem("bb-login-token");

  function getData(month: string) {
    axios
      .get(monthLink, {
        headers: {
          ["Authorization"]: token,
          ["Month"]: month,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { getData };
};
