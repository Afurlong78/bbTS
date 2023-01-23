import { ReactNode, Dispatch, SetStateAction } from "react";
// setState example => Dispatch<SetStateAction<Your State>>

//for setting up context
export type ContextProps = {
  children: ReactNode;
};

//For budget provider
export type BudgetTypes = {
  budget: number;
  setBudget: (action: number | ((prevState: number) => number)) => void;
  postBudget: () => void;
  getBudget: () => void;
};

export type Budget = {
  id: any;
  value: number;
};

//For Expense Provider
export type ExpenseTypes = {
  expenses: Expense[];
  setExpenses: (value: Expense[]) => void;
  postExpense: () => void;
  getExpense: () => void;
};

export type Expense = {
  id: any;
  value: number;
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
