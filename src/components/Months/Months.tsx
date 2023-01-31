import { useState, useEffect } from "react";
import { useSignInContext } from "../../context/SignInProvider";
import { useMonthsContext } from "../../context/MonthsProvider";
import { formatCurrency } from "../../utils/formatCurrency";
import "./Months-Styles.scss";
import "../../global/Styles.scss";

function Months() {
  const { theme } = useSignInContext();
  const { months, setMonths } = useMonthsContext();

  return (
    <div className="months-container">
      <div className="months-display">
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>January</h3>
          <div
            className={
              months?.january >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.january)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>February</h3>
          <div
            className={
              months.february >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.february)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>March</h3>
          <div
            className={
              months.march >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.march)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>April</h3>
          <div
            className={
              months.april >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.april)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>May</h3>
          <div
            className={
              months.may >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.may)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>June</h3>
          <div
            className={
              months.june >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.june)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>July</h3>
          <div
            className={
              months.july >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.july)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>August</h3>
          <div
            className={
              months.august >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.august)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>September</h3>
          <div
            className={
              months.september >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.september)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>October</h3>
          <div
            className={
              months.october >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.october)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>November</h3>
          <div
            className={
              months.novemeber >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.novemeber)}
          </div>
        </div>
        <div
          className={theme ? "month-card dark-text" : "month-card fourth-text"}
        >
          <h3>December</h3>
          <div
            className={
              months.decemeber >= 0
                ? "inner-card within-budget"
                : "inner-card over-budget"
            }
          >
            {formatCurrency(months.decemeber)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Months;
