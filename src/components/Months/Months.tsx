import { useState, useEffect } from "react";
import { useSignInContext } from "../../context/SignInProvider";
import { useMonthsContext } from "../../context/MonthsProvider";
import MonthItem from "./MonthItem";
import "./Months-Styles.scss";
import "../../global/Styles.scss";

function Months() {
  const { months } = useMonthsContext();

  return (
    <div className="months-container">
      <div className="months-display">
        {months.map((month, index) => {
          return <MonthItem month={month} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Months;
