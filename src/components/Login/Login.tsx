import { useState } from "react";
import "../Form-Styles/Form-Styles.scss";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { loginSchema } from "../../validation/formValidation";
import { useFormik, FormikHelpers } from "formik";
import { LoginType, Visible } from "../../global/Types";
import Loader from "../Loader/Loader";
import BackgroundComponent from "../Form-Styles/BackgroundComponent";
const eye = require("../../assets/Icons/Eye.png");

function Login() {
  const { login, response, errorOrLoading } = useLogin();
  const [visible, setVisible] = useState<Visible>({
    password: false,
  });

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (
        values: LoginType,
        { setSubmitting }: FormikHelpers<LoginType>
      ) => {
        login(values);
        setSubmitting(false);
      },
      validationSchema: loginSchema,
    });

  return (
    <div className="outter-form-container">
      {errorOrLoading.loading ? (
        <div className="load-wrapper">
          <Loader />
        </div>
      ) : null}
      <div className="inner-form-container">
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <h3 className="form-header">Login...</h3>

          {errorOrLoading.error ? (
            <p className="error-message">
              Email or Password does not match. Please make sure that you have
              registered your account and that you have entered the proper
              credentials.
            </p>
          ) : null}

          <div>
            <span>Email</span>{" "}
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
            <span>Password</span>{" "}
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

          <div className="submit-forgot-row">
            <button type="submit" className="link">
              Submit
            </button>
            <Link to="/forgot-password" className="link">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>

      <BackgroundComponent />
    </div>
  );
}

export default Login;
