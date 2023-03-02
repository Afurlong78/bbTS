import { useEffect } from "react";
import { useSignInContext } from "../../context/SignInProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useGetPageData } from "../../hooks/useGetPageData";
import Budget from "../Budget/Budget";
import Expense from "../Expense/Expense";
import Months from "../Months/Months";
import Compare from "../Comparison/Compare";
import "./BudgetUI-Styles.scss";
import "../../global/Styles.scss";

function BudgetUI() {
  const { theme } = useSignInContext();
  const { getData } = useGetPageData();
  const storedToken = localStorage.getItem("bb-login-token");

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className={
        theme
          ? "dark-gradient budget-ui-container"
          : "light-gradient budget-ui-container"
      }
    >
      {!storedToken ? (
        <div className="locked">
          <div className="locked-content">
            <FontAwesomeIcon
              className={theme ? `dark-text` : `primary-text`}
              icon={faLock}
              style={{ height: "200px", width: "200px" }}
            />
            <p className={theme ? `dark-text` : `light-text`}>
              You dont have permission to view this page, please login.
            </p>
          </div>
        </div>
      ) : (
        <div className="ui-wrapper">
          <Months />

          <Budget />

          <Expense />

          <Compare />
        </div>
      )}
    </div>
  );
}

export default BudgetUI;
