import * as yup from "yup";

//min 5 characters, at least 1 upper case letter, at least 1 lower case letter, at least 1 numeric digit, at least 1 special character.
const passwordRules =
  /^.*(?=.{5,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a strong password." })
    .required("Password is required."),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required."),
});

export const updatePasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a strong password." })
    .required("Password is required."),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required."),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
});

export const forgotPasswordSchema = yup.object().shape({
  user: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is required."),
});
