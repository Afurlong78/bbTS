import { useState } from "react";
import "../Form-Styles/Form-Styles.scss";
import { useUpdatePassword } from "../../hooks/useUpdatePassword";
import { updatePasswordSchema } from "../../validation/formValidation";
import { useFormik, FormikHelpers } from "formik";
import { UpdatePasswordType, Visible } from "../../global/Types";
import { useSignInContext } from "../../context/SignInProvider";
import BackgroundComponent from "../Form-Styles/BackgroundComponent";
const eye = require("../../assets/Icons/Eye.png");

function UpdatePassword() {
  const token = localStorage.getItem("bb-login-token");
  const { theme } = useSignInContext();
  const { success, setSuccess, update, errorOrLoading } = useUpdatePassword();
  const [visible, setVisible] = useState<Visible>({
    password: false,
    confirm: false,
  });

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        password: "",
        confirm: "",
      },
      onSubmit: (
        values: UpdatePasswordType,
        { setSubmitting }: FormikHelpers<UpdatePasswordType>
      ) => {
        update(values.password, values.confirm);
        setSubmitting(false);
      },
      validationSchema: updatePasswordSchema,
    });

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {token ? (
        <div
          className={
            theme
              ? `outter-form-container dark-gradient`
              : `outter-form-container light-gradient`
          }
        >
          {success ? (
            <div className="successful">
              <div>
                <h3>Success!</h3>
                <p>
                  You have successfully updates your password! You can now use
                  this password to login to your account.
                </p>
                <button onClick={() => setSuccess(false)}>x</button>
              </div>
            </div>
          ) : null}

          <div className="inner-form-container">
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
              <h3
                className={
                  theme ? `form-header dark-text` : `form-header primary-text`
                }
              >
                Update Password...
              </h3>

              <div>
                <span className={theme ? `dark-text` : `primary-text`}>
                  Password
                </span>{" "}
                <input
                  placeholder="Enter your password..."
                  name="password"
                  type={visible.password ? "" : "password"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                <button
                  type="button"
                  className="icon-visible"
                  onClick={() =>
                    setVisible({ ...visible, password: !visible.password })
                  }
                >
                  <img src={eye} />
                </button>
                {errors.password ? (
                  <div className="error">{errors.password}</div>
                ) : (
                  <div className="error"></div>
                )}
              </div>

              <div>
                <span className={theme ? `dark-text` : `primary-text`}>
                  Confirm Password
                </span>{" "}
                <input
                  placeholder="Confirm your password..."
                  name="confirm"
                  type={visible.confirm ? "" : "password"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirm}
                />
                <button
                  type="button"
                  className="icon-visible"
                  onClick={() =>
                    setVisible({ ...visible, confirm: !visible.confirm })
                  }
                >
                  <img src={eye} />
                </button>
                {errors.confirm ? (
                  <div className="error">{errors.confirm}</div>
                ) : (
                  <div className="error"></div>
                )}
              </div>

              <div className="submit-forgot-row">
                <button
                  type="submit"
                  className={theme ? "link-dark-submit" : "link-light"}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="password-background-wrapper">
            <div className="password-rules-container">
              <div className="password-rules">
                <h2>Password Rules</h2>
                <p>
                  In order to successfully register an account with
                  BetterBudget, your password must match the below requirements.
                </p>
                <ul>
                  <li>Minimum of 5 characters.</li>
                  <li>At least 1 uppercase letter.</li>
                  <li>At least 1 lowercase letter.</li>
                  <li>At least 1 numeric digit.</li>
                  <li>At least 1 special character.</li>
                </ul>
              </div>
            </div>
            <BackgroundComponent />
          </div>
        </div>
      ) : (
        <div>denied</div>
      )}
    </div>
  );
}

export default UpdatePassword;
