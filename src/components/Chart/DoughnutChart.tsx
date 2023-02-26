import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { useBudgetContext } from "../../context/BudgetProvider";
import "./Chart-Styles.scss";

function DoughnutChart() {
  const { expensesBreakDown } = useBudgetContext();

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
        backgroundColor: ["#ff7676", "#7794f5", "#48da85", "#f6ff76"],
        borderColor: ["#ff7676", "#7794f5", "#48da85", "#f6ff76"],
      },
    ],
  };

  const options = {};

  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <div className="chart-container">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
