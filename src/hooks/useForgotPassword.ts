import { useState } from "react";
import { ErrorOrLoading } from "../global/Types";
import axios from "axios";

export function useForgotPassword() {
  const [success, setSuccess] = useState<boolean>(false);
  const [errorOrLoading, setErrorOrLoading] = useState<ErrorOrLoading>({
    loading: false,
    error: false,
    errorMessage: "",
  });

  function resetPassword(email: string) {
    if (email.length === 0 || typeof email !== "string") return;

    setErrorOrLoading({ ...errorOrLoading, loading: true });

    axios
      .post("http://localhost:5000/api/posts/generatePassword", {
        user: email,
      })
      .then((res) => {
        console.log(res);
        setErrorOrLoading({ ...errorOrLoading, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { resetPassword, errorOrLoading, success, setSuccess };
}
