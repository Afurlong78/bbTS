import { ReactNode, Dispatch, SetStateAction } from "react";
// setState example => Dispatch<SetStateAction<Your State>>
//setPrevState example => (action: number | ((prevState: number) => number)) => void

//test

export type MockTest = {
  month?: string;
  budget?: number;
  expenses: Expense[];
  user?: string;
};

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
  expenses: Expense[];
  setExpenses: (value: Expense[]) => void;
};

export type Budget = {
  month: string;
  value: number;
  id?: any;
};

//For Expense Provider
export type ExpenseTypes = {
  expenseInput: string;
  setExpenseInput: Dispatch<SetStateAction<string>>;
  postExpense: (value: number, month: string, category: string) => void;
  removeExpense: (id: string, month: string) => void;
  removeAllExpenses: (month: string) => void;
  setSpent: Dispatch<SetStateAction<number>>;
  spent: number;
};

export type Expense = {
  id?: any;
  value: number;
  category: string;
};

export type ExpenseItemTypeProps = {
  expense: Expense;
};

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
