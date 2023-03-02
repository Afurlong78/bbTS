import { useState, useContext, createContext, useMemo } from "react";
import { monthKeys } from "../utils/monthKeys";
import {
  ContextProps,
  BudgetTypes,
  Budget,
  Expense,
  ExpensesBreakDown,
  Month,
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
  const [months, setMonths] = useState<Month[]>([
    { month: "January", value: 0 },
    { month: "February", value: 0 },
    { month: "March", value: 0 },
    { month: "April", value: 0 },
    { month: "May", value: 0 },
    { month: "June", value: 0 },
    { month: "July", value: 0 },
    { month: "August", value: 0 },
    { month: "September", value: 0 },
    { month: "October", value: 0 },
    { month: "November", value: 0 },
    { month: "December", value: 0 },
  ]);

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

        const ex: Expense[] = [...response.data.data.expenses];
        const sum = ex.reduce((acc, curr) => acc + curr.value, 0);
        const m = [...months];

        if (m[monthKeys[response.data.data.month]]) {
          m[monthKeys[response.data.data.month]].value =
            response.data.data.budget - sum;
        }

        setMonths(m);
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
        months,
        setMonths,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

export default BudgetProvider;
