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
  expensesBreakDown: ExpensesBreakDown;
  months: Month[];
  setMonths: Dispatch<SetStateAction<Month[]>>;
  budgetError: InputError;
  setBudgetError: Dispatch<SetStateAction<InputError>>;
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
  expenseError: InputError;
  setExpenseError: Dispatch<SetStateAction<InputError>>;
};

export type Expense = {
  id?: any;
  value: number;
  category: string;
};

export type ExpenseItemTypeProps = {
  expense: Expense;
};

export type ExpenseBreakDownType = {
  entertainment: number;
  groceries: number;
  bills: number;
  other: number;
};

export interface ExpensesBreakDown {
  [key: string]: number;
  Entertainment: number;
  Groceries: number;
  Bills: number;
  Other: number;
}

//Comparison Provider

export type ComparisonType = {
  getStart: () => void;
  getEnd: () => void;
  getData: () => void;
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

export type MonthsResponseType = {
  budget: number;
  expenses: Expense[];
  month: string;
};
//for sign in provider
export type SignedInType = {
  theme: boolean;
  setTheme: (value: boolean) => void;
  signedIn: boolean;
  setSignedIn: (value: boolean) => void;
};

//form types
export type ForgotPasswordType = {
  user: string;
};

export type UpdatePasswordType = {
  password: string;
  confirm: string;
};

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

// utils
export interface MonthsKeysType {
  [key: string]: number;
  January: number;
  February: number;
  March: number;
  April: number;
  May: number;
  June: number;
  July: number;
  August: number;
  September: number;
  October: number;
  November: number;
  December: number;
}

//error inputs
export type InputError = {
  error?: boolean;
  errorMessage?: string;
};
