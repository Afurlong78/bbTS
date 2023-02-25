import { useState, useEffect, useContext, createContext } from "react";
import {
  ContextProps,
  BudgetTypes,
  Budget,
  Expense,
  MockTest,
} from "../global/Types";
import axios from "axios";

const BudgetContext = createContext({} as BudgetTypes);

export const useBudgetContext = () => {
  return useContext(BudgetContext);
};

export function BudgetProvider({ children }: ContextProps) {
  const token = localStorage.getItem("bb-login-token");
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budgetInput, setBudgetInput] = useState<string>("");
  const [budget, setBudget] = useState<Budget>({
    value: 0,
    month: "",
  });

  const budgetLink = process.env.REACT_APP_USER_BUDGETS!;

  function postBudget(value: number, month: string) {
    if (isNaN(value) || value === 0) return;
    setBudgetInput("");

    axios
      .post(
        budgetLink,
        {
          budget: value,
          month: month,
        },
        {
          headers: {
            ["Authorization"]: token,
          },
        }
      )
      .then((response) => {
        console.log(response, "response");
        setBudget({
          value: response.data.data.budget,
          month: response.data.data.month,
        });

        setExpenses(response.data.data.expenses);
      })
      .catch((error) => {
        console.log(error, "error");
        // alert(error.response.data.data);
      });
  }

  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
        postBudget,
        budgetInput,
        setBudgetInput,
        expenses,
        setExpenses,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

export default BudgetProvider;
