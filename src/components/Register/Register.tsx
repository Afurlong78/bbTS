import { useState } from "react";
import "../Form-Styles/Form-Styles.scss";
import { useRegister } from "../../hooks/useRegsiter";
import { registerSchema } from "../../validation/formValidation";
import { useFormik, FormikHelpers } from "formik";
import { RegisterType, Visible } from "../../global/Types";
import BackgroundComponent from "../Form-Styles/BackgroundComponent";
const eye = require("../../assets/Icons/Eye.png");

function Register() {
  const { register, response } = useRegister();
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
    <div className="outter-form-container">
      <div className="inner-form-container">
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <h3 className="form-header">Register...</h3>

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

          <div>
            <span>Confirm Password</span>{" "}
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
