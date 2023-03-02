import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BudgetProvider } from "./context/BudgetProvider";
import { SignInProvider } from "./context/SignInProvider";
import { ExpenseProvider } from "./context/ExpenseProvider";
import { ComparisonProvider } from "./context/ComparisonProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SignInProvider>
      <BudgetProvider>
        <ExpenseProvider>
          <ComparisonProvider>
            <App />
          </ComparisonProvider>
        </ExpenseProvider>
      </BudgetProvider>
    </SignInProvider>
  </React.StrictMode>
);
