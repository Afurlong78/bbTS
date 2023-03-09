import { useState } from "react";
import { ErrorOrLoading } from "../global/Types";
import axios from "axios";

export const useUpdatePassword = () => {
  const token = localStorage.getItem("bb-login-token");
  const [success, setSuccess] = useState<boolean>(false);
  const [errorOrLoading, setErrorOrLoading] = useState<ErrorOrLoading>({
    loading: false,
    error: false,
    errorMessage: "",
  });

  function update(password: string, confirm: string) {
    setErrorOrLoading({ ...errorOrLoading, loading: true });

    axios
      .post(
        "https://bbtsserver-production.up.railway.app/api/posts/updatePassword",
        {
          password: password,
          confirm: confirm,
        },
        {
          headers: {
            ["Authorization"]: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setErrorOrLoading({ ...errorOrLoading, loading: false });
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorOrLoading({
          error: true,
          errorMessage: "Unable to reset password.",
          loading: false,
        });
      });
  }

  return { update, errorOrLoading, success, setSuccess };
};
