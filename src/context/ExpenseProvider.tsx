import { useState, useEffect, useContext, createContext, useMemo } from "react";
import { useBudgetContext } from "./BudgetProvider";
import { ExpenseTypes, Expense, ContextProps } from "../global/Types";
import { nanoid } from "nanoid";
import axios from "axios";

const ExpenseContext = createContext({} as ExpenseTypes);

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};

export function ExpenseProvider({ children }: ContextProps) {
  const token = localStorage.getItem("bb-login-token");
  const { budget, expenses, setExpenses } = useBudgetContext();

  const [expenseInput, setExpenseInput] = useState<string>("");
  const [spent, setSpent] = useState<number>(0);
  // const spent = useMemo(() => {
  //   return expenses.reduce((acc, curr)=> acc + curr.value, 0)
  // }, [expenses]);

  const expenseLink = process.env.REACT_APP_USER_EXPENSES!;
  const expenseDeleteLink = process.env.REACT_APP_USER_EXPENSES_DELETE!;
  const expenseDeleteAllLink = process.env.REACT_APP_USER_EXPENSES_DELETE_ALL!;
  const budgetLink = process.env.REACT_APP_USER_BUDGETS_UPDATED!;

  function postExpense(value: number, month: string) {
    if (isNaN(value) || value === 0) return;

    setExpenseInput("");

    axios
      .post(
        expenseLink,
        {
          value: value,
          month: month,
          category: "Entertainment",
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function removeExpense(id: string, month: string) {
    axios
      .post(
        expenseDeleteLink,
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
          res.data.data.matchedCount === 1 &&
          res.data.data.modifiedCount === 1
        ) {
          const ex = [...expenses];
          const filtered = ex.filter((item) => item.id !== id);
          const sum = filtered.reduce((acc, curr) => acc + curr.value, 0);

          setExpenses(filtered);
          setSpent(sum);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function removeAllExpenses(month: string) {
    axios
      .post(
        expenseDeleteAllLink,
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
