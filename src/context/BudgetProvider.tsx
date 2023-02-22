import { useState, useEffect, useContext, createContext } from "react";
import { ContextProps, BudgetTypes, Budget } from "../global/Types";
import axios from "axios";

const BudgetContext = createContext({} as BudgetTypes);

export const useBudgetContext = () => {
  return useContext(BudgetContext);
};

export function BudgetProvider({ children }: ContextProps) {
  const token = localStorage.getItem("bb-login-token");
  const [lookingAtMonth, setLookingAtMonth] = useState<string>("January");
  const [budgetInput, setBudgetInput] = useState<string>("");
  const [budget, setBudget] = useState<Budget>({
    value: 0,
    month: "",
  });

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

  function postBudget(value: number, month: string) {
    if (value === 0) return;

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
          value: response.data.budget.budget,
          month: response.data.budget.month,
        });
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
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

export default BudgetProvider;
