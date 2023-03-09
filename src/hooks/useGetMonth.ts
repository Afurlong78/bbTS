import { useBudgetContext } from "../context/BudgetProvider";
import { MonthsResponseType } from "../global/Types";
import { monthKeys } from "../utils/monthKeys";
import axios from "axios";

export const useGetMonthData = () => {
  const { months, setMonths } = useBudgetContext();
  const token = localStorage.getItem("bb-login-token");

  function getData() {
    axios
      .get("https://bbtsserver-production.up.railway.app/api/posts/month", {
        headers: {
          ["Authorization"]: token,
        },
      })
      .then((response) => {
        // console.log(response, "response");
        const res = response.data.data;
        const m = [...months];

        if (res.length === 0) return;

        res.forEach((item: MonthsResponseType) => {
          if (m[monthKeys[item.month]]) {
            const sum = item.expenses.reduce(
              (acc, curr) => acc + curr.value,
              0
            );

            m[monthKeys[item.month]].value = item.budget - sum;
          }
        });
        setMonths(m);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { getData };
};
