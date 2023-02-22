import React, { useState, useEffect } from "react";
import { MonthItemProps } from "../../global/Types";
import { formatCurrency } from "../../utils/formatCurrency";
import { useSignInContext } from "../../context/SignInProvider";
import { useMonthsContext } from "../../context/MonthsProvider";
import "./Months-Styles.scss";
import "../../global/Styles.scss";

function MonthItem(props: MonthItemProps) {
  const { theme } = useSignInContext();

  return (
    <div
      className={
        theme ? "month-card-dark dark-text" : "month-card-light fourth-text"
      }
      id={props.index.toString()}
    >
      <h3>{props.month.month}</h3>
      <div
        className={
          props.month?.value >= 0
            ? "inner-card within-budget"
            : "inner-card over-budget"
        }
      >
        {formatCurrency(props.month.value)}
      </div>
    </div>
  );
}

export default MonthItem;
