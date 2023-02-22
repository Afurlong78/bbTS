import { useState, useEffect, useContext, createContext, useMemo } from "react";
import { useBudgetContext } from "./BudgetProvider";
import { ExpenseTypes, Expense, ContextProps } from "../global/Types";
import axios from "axios";
import { nanoid } from "nanoid";

const ExpenseContext = createContext({} as ExpenseTypes);

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};

export function ExpenseProvider({ children }: ContextProps) {
  const token = localStorage.getItem("bb-login-token");
  const { budget } = useBudgetContext();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [spent, setSpent] = useState<number>(0);

  const expenseLink = process.env.REACT_APP_USER_EXPENSES!;

  const updatedExpenses = useMemo(() => {}, [budget]);

  function getExpense() {
    axios
      .get(expenseLink)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function postExpense(value: number, month: string) {
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

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
        postExpense,
        getExpense,
        spent,
        setSpent,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
