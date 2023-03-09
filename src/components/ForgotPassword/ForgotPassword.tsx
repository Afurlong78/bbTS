import "../Form-Styles/Form-Styles.scss";
import { forgotPasswordSchema } from "../../validation/formValidation";
import { useFormik, FormikHelpers } from "formik";
import { ForgotPasswordType } from "../../global/Types";
import { useSignInContext } from "../../context/SignInProvider";
import BackgroundComponent from "../Form-Styles/BackgroundComponent";
import { useForgotPassword } from "../../hooks/useForgotPassword";

function ForgotPassword() {
  const { theme } = useSignInContext();
  const {
    resetPassword,
    success,
    setSuccess,
    errorOrLoading,
    setErrorOrLoading,
  } = useForgotPassword();

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        user: "",
      },
      onSubmit: (
        values: ForgotPasswordType,
        { setSubmitting }: FormikHelpers<ForgotPasswordType>
      ) => {
        resetPassword(values.user);
        setSubmitting(false);
      },
      validationSchema: forgotPasswordSchema,
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
              Your password has been reset. Please check your email for your new
              password.{" "}
            </p>
            <button onClick={() => setSuccess(false)}>x</button>
          </div>
        </div>
      ) : null}

      {errorOrLoading.error ? (
        <div className="successful">
          <div>
            <h3>There was a problem...</h3>
            <p>{errorOrLoading.errorMessage}</p>
            <button
              onClick={() =>
                setErrorOrLoading({ ...errorOrLoading, error: false })
              }
            >
              x
            </button>
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
            Forgot Your Password?
          </h3>

          <div>
            <span className={theme ? `dark-text` : `primary-text`}>Email</span>{" "}
            <input
              placeholder="Enter your email..."
              name="user"
              id="user"
              type="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.user}
            />
            {errors.user && touched.user ? (
              <div className="error">{errors.user}</div>
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

      <BackgroundComponent />
    </div>
  );
}

export default ForgotPassword;
