import { useState, useEffect, useContext, createContext } from "react";
import { ContextProps, BudgetTypes } from "../global/Types";
import axios from "axios";

const BudgetContext = createContext({} as BudgetTypes);

export const useBudgetContext = () => {
  return useContext(BudgetContext);
};

export function BudgetProvider({ children }: ContextProps) {
  const token = localStorage.getItem("bb-user-token");
  const [budget, setBudget] = useState<number>(0);

  const budgetLink = process.env.REACT_APP_USER_BUDGETS!;

  function getBudget() {
    axios
      .get(budgetLink)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function postBudget() {
    // axios.post()
  }

  return (
    <BudgetContext.Provider
      value={{ budget, setBudget, postBudget, getBudget }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

export default BudgetProvider;
