import { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useBudgetContext } from "../../context/BudgetProvider";
import { useSignInContext } from "../../context/SignInProvider";
import { formatCurrency } from "../../utils/formatCurrency";
import "./Chart-Styles.scss";

function DoughnutChart() {
  const { expensesBreakDown, budget, expenses } = useBudgetContext();
  const { theme } = useSignInContext();

  const fontColors = useMemo(() => {
    if (theme) {
      return "rgb(255, 255, 255)";
    } else {
      return "#39436e";
    }
  }, [theme]);

  const materials = [
    {
      category: "Entertainment",
      value: expensesBreakDown.Entertainment,
    },
    {
      category: "Groceries",
      value: expensesBreakDown.Groceries,
    },
    {
      category: "Bills",
      value: expensesBreakDown.Bills,
    },

    {
      category: "Other",
      value: expensesBreakDown.Other,
    },
  ];

  const data = {
    labels: Object.keys(expensesBreakDown),
    datasets: [
      {
        label: "Expenses",
        data: materials.map((item) => item.value),
        backgroundColor: ["#7794f5", "#48da85", "#ff7676", "#f6ff76"],
        borderColor: ["#7794f5", "#48da85", "#ff7676", "#f6ff76"],
      },
    ],
  };

  const options = {};

  ChartJS.register(ArcElement, Tooltip, Legend);
  ChartJS.defaults.color = fontColors;

  const entertainmentPercentage = useMemo(() => {
    if (expenses.length === 0) return 0;
    return (expensesBreakDown.Entertainment / budget.value) * 100;
  }, [budget, expenses]);

  const groceriesPercentage = useMemo(() => {
    if (expenses.length === 0) return 0;
    return (expensesBreakDown.Groceries / budget.value) * 100;
  }, [budget, expenses]);

  const billsPercentage = useMemo(() => {
    if (expenses.length === 0) return 0;
    return (expensesBreakDown.Bills / budget.value) * 100;
  }, [budget, expenses]);

  const otherPercentage = useMemo(() => {
    if (expenses.length === 0) return 0;
    return (expensesBreakDown.Other / budget.value) * 100;
  }, [budget, expenses]);

  return (
    <div
      className={
        theme
          ? "doughnut-chart-container dark-chart-bg"
          : "doughnut-chart-container light-chart-bg"
      }
    >
      <div className="break-down-container">
        <div className={theme ? "header dark-text" : "header fourth-text"}>
          Breakdown
          <div className="arrow" />
        </div>
        <span style={{ background: "#7794f5", color: "#39436e" }}>
          <p>Entertainment:</p>
          <div className="break-down-row">
            <strong>{formatCurrency(expensesBreakDown.Entertainment)}</strong>
            <strong>{Math.floor(entertainmentPercentage)}%</strong>
          </div>
        </span>
        <span style={{ background: " #48da85", color: "#184e2f" }}>
          <p>Groceries:</p>
          <div className="break-down-row">
            <strong>{formatCurrency(expensesBreakDown.Groceries)}</strong>
            <strong>{Math.floor(groceriesPercentage)}%</strong>
          </div>
        </span>
        <span style={{ background: "#ff7676", color: "#6d2e2e" }}>
          <p>Bills:</p>{" "}
          <div className="break-down-row">
            <strong>{formatCurrency(expensesBreakDown.Bills)}</strong>
            <strong>{Math.floor(billsPercentage)}%</strong>
          </div>
        </span>
        <span style={{ background: "#f6ff76", color: "#4e4d18" }}>
          <p>Other: </p>
          <div className="break-down-row">
            <strong>{formatCurrency(expensesBreakDown.Other)}</strong>
            <strong>{Math.floor(otherPercentage)}%</strong>
          </div>
        </span>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
