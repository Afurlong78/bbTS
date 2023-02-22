import { ReactNode, Dispatch, SetStateAction } from "react";
// setState example => Dispatch<SetStateAction<Your State>>
//setPrevState example => (action: number | ((prevState: number) => number)) => void

//for setting up context
export type ContextProps = {
  children: ReactNode;
};

//For budget provider
export type BudgetTypes = {
  budget: Budget;
  setBudget: Dispatch<SetStateAction<Budget>>;
  budgetInput: string;
  setBudgetInput: Dispatch<SetStateAction<string>>;
  postBudget: (value: number, month: string) => void;
};

export type Budget = {
  month: String;
  value: number;
  id?: any;
};

//For Expense Provider
export type ExpenseTypes = {
  expenses: Expense[];
  setExpenses: (value: Expense[]) => void;
  postExpense: (value: number, month: string) => void;
  getExpense: () => void;
  setSpent: Dispatch<SetStateAction<number>>;
  spent: number;
};

export type Expense = {
  id?: any;
  value: number;
  category: string;
};

export type ExpenseItemType = {};

//For Months Provider

export type Month = { month: String; value: number };

export type MonthsTypes = {
  months: Month[];
  setMonths: Dispatch<SetStateAction<Month[]>>;
};

export type MonthItemProps = {
  month: { month: String; value: number };
  index: number;
};

//for sign in provider
export type SignedInType = {
  theme: boolean;
  setTheme: (value: boolean) => void;
  signedIn: boolean;
  setSignedIn: (value: boolean) => void;
};

//form types
export type RegisterType = {
  email: string;
  password: string;
  confirm: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type Visible = {
  password?: boolean;
  confirm?: boolean;
};

export type ErrorOrLoading = {
  error?: boolean;
  errorMessage?: string;
  loading?: boolean;
};
