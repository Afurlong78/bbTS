import { useState } from "react";
import "../Form-Styles/Form-Styles.scss";
import { useRegister } from "../../hooks/useRegsiter";
import { registerSchema } from "../../validation/formValidation";
import { useFormik, FormikHelpers } from "formik";
import { RegisterType, Visible } from "../../global/Types";
import { useSignInContext } from "../../context/SignInProvider";
import BackgroundComponent from "../Form-Styles/BackgroundComponent";
const eye = require("../../assets/Icons/Eye.png");

function Register() {
  const { theme } = useSignInContext();
  const { register, success, setSuccess } = useRegister();
  const [visible, setVisible] = useState<Visible>({
    password: false,
    confirm: false,
  });

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirm: "",
      },
      onSubmit: (
        values: RegisterType,
        { setSubmitting }: FormikHelpers<RegisterType>
      ) => {
        register(values);
        setSubmitting(false);
      },
      validationSchema: registerSchema,
    });

  return (
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
              You have successfully registered your account! You should be
              recieving an email from us to confirm your account creation.
              Please click the link provided to confirm your account to begin
              budgeting!{" "}
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
            Register...
          </h3>

          <div>
            <span className={theme ? `dark-text` : `primary-text`}>Email</span>{" "}
            <input
              placeholder="Enter your email..."
              name="email"
              type="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
            ) : (
              <div className="error"></div>
            )}
          </div>

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
            <button type="submit" className="link">
              Submit
            </button>
          </div>
        </form>
      </div>

      <BackgroundComponent />
    </div>
  );
}

export default Register;
