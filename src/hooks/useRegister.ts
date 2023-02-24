import { useState } from "react";
import { RegisterType, ErrorOrLoading } from "../global/Types";
import axios from "axios";

export const useRegister = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [errorOrLoading, setErrorOrLoading] = useState<ErrorOrLoading>({
    loading: false,
    error: false,
    errorMessage: "",
  });

  const userRegisterLink = process.env.REACT_APP_USER_REGISTER!;

  const register = ({ email, password }: RegisterType) => {
    setErrorOrLoading({ ...errorOrLoading, loading: true });

    axios
      .post(userRegisterLink, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res, "register-response");
        setSuccess(true);
        setErrorOrLoading({ ...errorOrLoading, loading: false });
      })
      .catch((err) => {
        setErrorOrLoading({
          loading: false,
          error: true,
          errorMessage: err.message,
        });
      });
  };

  return { register, errorOrLoading, success, setSuccess };
};
