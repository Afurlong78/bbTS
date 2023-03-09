import { useState, useContext, createContext } from "react";
import { useBudgetContext } from "./BudgetProvider";
import { ExpenseTypes, ContextProps, InputError } from "../global/Types";
import { monthKeys } from "../utils/monthKeys";
import { nanoid } from "nanoid";
import axios from "axios";
import { Input } from "reactstrap";

const ExpenseContext = createContext({} as ExpenseTypes);

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};

export function ExpenseProvider({ children }: ContextProps) {
  const token = localStorage.getItem("bb-login-token");

  const { expenses, months, budget, setExpenses, setMonths } =
    useBudgetContext();
  const [expenseInput, setExpenseInput] = useState<string>("");
  const [spent, setSpent] = useState<number>(0);
  const [expenseError, setExpenseError] = useState<InputError>({
    error: false,
    errorMessage: "",
  });

  function postExpense(value: number, month: string, category: string) {
    if (isNaN(value) || value === 0) {
      return setExpenseError({
        error: true,
        errorMessage: "Expense must be a number and cannot be 0.",
      });
    }

    setExpenseInput("");

    axios
      .post(
        "https://bbtsserver-production.up.railway.app/api/posts/expenses",
        {
          value: value,
          month: month,
          category: category,
          id: nanoid(),
        },
        {
          headers: {
            ["Authorization"]: token,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        const copy = [...expenses];
        copy.push({
          value: res.data.data.value,
          category: res.data.data.category,
          id: res.data.data.id,
        });

        const sum = copy.reduce((acc, curr) => acc + curr.value, 0);

        setSpent(sum);
        setExpenses(copy);

        const m = [...months];
        if (m[monthKeys[budget.month]]) {
          m[monthKeys[budget.month]].value = budget.value - sum;
        }

        setMonths(m);
        setExpenseError({ error: false, errorMessage: "" });
      })
      .catch((err) => {
        // console.log(err, "error");
        setExpenseError({ error: true, errorMessage: err.response.data.error });
      });
  }

  function removeExpense(id: string, month: string) {
    axios
      .post(
        "https://bbtsserver-production.up.railway.app/api/posts/expenses/delete",
        {
          id: id,
          month: month,
        },
        {
          headers: {
            ["Authorization"]: token,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        if (
          res.data.data.acknowledged === true &&
          res.data.data.modifiedCount === 1
        ) {
          const ex = [...expenses];
          const filtered = ex.filter((item) => item.id !== id);
          const sum = filtered.reduce((acc, curr) => acc + curr.value, 0);

          setExpenses(filtered);
          setSpent(sum);

          const m = [...months];

          if (m[monthKeys[budget.month]]) {
            m[monthKeys[budget.month]].value = budget.value - sum;
          }

          setMonths(m);
        }
      })
      .catch((err) => {
        console.log(err);
        setExpenseError({
          error: true,
          errorMessage: "Unable to remove budget.",
        });
      });
  }

  function removeAllExpenses(month: string) {
    axios
      .post(
        "https://bbtsserver-production.up.railway.app/api/posts/expenses/delete/deleteAll",
        {
          month: month,
        },
        {
          headers: {
            ["Authorization"]: token,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        if (
          res.data.data.acknowledged === true &&
          res.data.data.modifiedCount === 1
        ) {
          setExpenses([]);
          setSpent(0);

          const m = [...months];

          if (m[monthKeys[budget.month]]) {
            m[monthKeys[budget.month]].value = budget.value - 0;
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setExpenseError({
          error: true,
          errorMessage: "Unable to remove all expenses.",
        });
      });
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenseInput,
        setExpenseInput,
        postExpense,
        spent,
        setSpent,
        removeExpense,
        removeAllExpenses,
        expenseError,
        setExpenseError,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
