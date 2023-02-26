import { useState, useContext, createContext, useMemo } from "react";
import {
  ContextProps,
  BudgetTypes,
  Budget,
  Expense,
  ExpensesBreakDown,
} from "../global/Types";
import axios from "axios";

const BudgetContext = createContext({} as BudgetTypes);

export const useBudgetContext = () => {
  return useContext(BudgetContext);
};

export function BudgetProvider({ children }: ContextProps) {
  const token = localStorage.getItem("bb-login-token");
  const budgetLink = process.env.REACT_APP_USER_BUDGETS!;

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [budgetInput, setBudgetInput] = useState<string>("");
  const [budget, setBudget] = useState<Budget>({
    value: 0,
    month: "",
  });

  const expensesBreakDown = useMemo(() => {
    const ex = [...expenses];
    const breakDown: ExpensesBreakDown = {
      Entertainment: 0,
      Groceries: 0,
      Bills: 0,
      Other: 0,
    };

    ex.forEach((item) => {
      breakDown[item.category] += item.value;
    });

    return breakDown;
  }, [expenses]);

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
        // console.log(response, "response");
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
        expensesBreakDown,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

export default BudgetProvider;
