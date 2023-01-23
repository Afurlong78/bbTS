import React from "react";
import { useGetPageData } from "../../hooks/useGetPageData";

function Expense() {
  const expenseLink = process.env.REACT_APP_USER_EXPENSES!;
  useGetPageData(expenseLink);

  return (
    <div>
      Expense
    </div>
  );
}

export default Expense;
