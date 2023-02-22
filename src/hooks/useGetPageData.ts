import { useEffect, useCallback } from "react";
import { useExpenseContext } from "../context/ExpenseProvider";
import { useBudgetContext } from "../context/BudgetProvider";
import axios from "axios";

export const useGetPageData = () => {
  const { setBudget } = useBudgetContext();
  const { setExpenses, setSpent } = useExpenseContext();

  const token = localStorage.getItem("bb-login-token");
  const budgetLink = process.env.REACT_APP_USER_BUDGETS!;

  function getData() {
    axios
      .get(budgetLink, {
        headers: {
          ["Authorization"]: token,
        },
      })
      .then((res) => {
        // console.log(res);

        const copy = [...res.data.data.expenses];
        const sum = copy.reduce((acc, curr) => acc + curr.value, 0);

        setExpenses(copy);
        setSpent(sum);
        setBudget({
          value: res.data.data.budget,
          month: res.data.data.month,
          id: res.data.data._id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { getData };
};
