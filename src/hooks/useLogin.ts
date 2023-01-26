import { useState } from "react";
import { LoginType, ErrorOrLoading } from "../global/Types";
import { useSignInContext } from "../context/SignInProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setSignedIn } = useSignInContext();
  const [response, setResponse] = useState<any>();
  const [errorOrLoading, setErrorOrLoading] = useState<ErrorOrLoading>({
    loading: false,
    error: false,
    errorMessage: "",
  });

  const userLoginLink = process.env.REACT_APP_USER_LOGIN!;

  const login = ({ email, password }: LoginType) => {
    setErrorOrLoading({ ...errorOrLoading, loading: true });

    axios
      .post(userLoginLink, {
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(res, "login-response");
        setErrorOrLoading({ ...errorOrLoading, loading: false });
        localStorage.setItem("bb-login-token", res.data.token);
        setResponse(res);
        setSignedIn(true);
        navigate("/budget");
      })
      .catch((err) => {
        // console.log(err, "login-error");
        setErrorOrLoading({
          loading: false,
          error: true,
          errorMessage: err.message,
        });
      });
  };

  const logoutHandler = () => {
    localStorage.removeItem("bb-login-token");
    navigate("/login");
    setSignedIn(false);
  };

  return { login, response, errorOrLoading, logoutHandler };
};
