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
    console.log("ran");

    axios
      .post(
        "http://localhost:5000/api/posts/updatePassword",
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { update, errorOrLoading, success, setSuccess };
};
