import { useState, useEffect } from "react";
import "./Budget-Styles.scss";
import { useGetPageData } from "../../hooks/useGetPageData";
import { useBudgetContext } from "../../context/BudgetProvider";
import { useSignInContext } from "../../context/SignInProvider";
import { formatCurrency } from "../../utils/formatCurrency";
import DropDown from "../BootStrap/DropDown/DropDown";
import { useFormik } from "formik";

function Budget() {
  const budgetLink = process.env.REACT_APP_USER_BUDGETS!;
  const { budget } = useBudgetContext();
  const { theme } = useSignInContext();
  const [month, setMonth] = useState<string>("January");
  // useGetPageData(budgetLink);

  //budget
  // const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
  //   useFormik({
  //     initialValues: {
  //       email: "",
  //       password: "",
  //       confirm: "",
  //     },
  //     onSubmit: (
  //       values: RegisterType,
  //       { setSubmitting }: FormikHelpers<RegisterType>
  //     ) => {
  //       register(values);
  //       setSubmitting(false);
  //     },
  //     validationSchema: registerSchema,
  //   });

  return (
    <div className="budget-container">
      <div className="values-display">
        <div
          className="value"
          style={{ background: "#7794f5", color: "#39436e" }}
        >
          Budget:{" "}
          <strong>
            <span>{formatCurrency(budget)}</span>
          </strong>
        </div>
        <div
          className="value"
          style={{ background: "#ff7676", color: "#6d2e2e" }}
        >
          Remaining:
          <strong>
            <span>{formatCurrency(budget)}</span>
          </strong>
        </div>
        <div
          className="value"
          style={{ background: "#48da85", color: "#184e2f" }}
        >
          Spent:{" "}
          <strong>
            <span>{formatCurrency(budget)}</span>
          </strong>
        </div>
      </div>

      <div className="inputs-display">
        <div className="inputs">
          <span>Budget</span>

          <div className="input-wrapper">
            <input
              className="input"
              type="number"
              placeholder="Submit your budget..."
            />
            <button
              className={theme ? "dark-primary-button" : "light-primary-button"}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="inputs">
          <span>Expense</span>

          <div className="input-wrapper">
            <input
              className="input"
              type="number"
              placeholder="Submit your expenses..."
            />
            <button>Submit</button>
          </div>
        </div>

        <div className="dropdown-container">
          <DropDown month={month} setMonth={setMonth} />
        </div>
      </div>
    </div>
  );
}

export default Budget;
