import { useState, useEffect, useContext, createContext } from "react";
import { ExpenseTypes, Expense, ContextProps } from "../global/Types";
import axios from "axios";

const ExpenseContext = createContext({} as ExpenseTypes);

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};

export function ExpenseProvider({ children }: ContextProps) {
  const token = localStorage.getItem("bb-user-token");
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const expenseLink = process.env.REACT_APP_USER_EXPENSES!;

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

  function postExpense() {
    // axios.post()
  }

  return (
    <ExpenseContext.Provider
      value={{ expenses, setExpenses, postExpense, getExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
