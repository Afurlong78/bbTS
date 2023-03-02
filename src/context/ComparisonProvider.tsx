import { createContext, useContext } from "react";
import { ComparisonType, ContextProps } from "../global/Types";
import axios from "axios";

const ComparisonContext = createContext({} as ComparisonType);

export const useComparisonContext = () => {
  return useContext(ComparisonContext);
};

export function ComparisonProvider({ children }: ContextProps) {
  const token = localStorage.getItem("bb-login-token");

  function getData() {
    axios
      .get("http://localhost:5000/api/posts/month", {
        headers: {
          ["Authorization"]: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getStart() {}

  function getEnd() {}

  return (
    <ComparisonContext.Provider value={{ getStart, getEnd, getData }}>
      {children}
    </ComparisonContext.Provider>
  );
}

export default ComparisonProvider;
