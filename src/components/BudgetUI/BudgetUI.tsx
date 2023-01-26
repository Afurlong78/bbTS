import Budget from "../Budget/Budget";
import Expense from "../Expense/Expense";
import "./BudgetUI-Styles.scss";
import "../../global/Styles.scss";
import { useSignInContext } from "../../context/SignInProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function BudgetUI() {
  const { theme } = useSignInContext();
  const storedToken = localStorage.getItem("bb-login-token");

  return (
    <div className="budget-container">
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
          <Budget />
          <Expense />
        </div>
      )}
    </div>
  );
}

export default BudgetUI;
