import { useEffect } from "react";
import { useBudgetContext } from "../../context/BudgetProvider";
import { useGetMonthData } from "../../hooks/useGetMonth";
import MonthItem from "./MonthItem";
import "./Months-Styles.scss";
import "../../global/Styles.scss";

function Months() {
  const { months } = useBudgetContext();
  // const { months } = useMonthsContext();
  const { getData } = useGetMonthData();

  useEffect(() => {
    getData();
  }, []);

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
