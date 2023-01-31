import { useState, useEffect, useContext, createContext } from "react";
import { SignedInType, ContextProps } from "../global/Types";

const SignInContext = createContext({} as SignedInType);

export const useSignInContext = () => {
  return useContext(SignInContext);
};

export function SignInProvider({ children }: ContextProps) {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body;

    if (theme === false) {
      body.style.backgroundColor = "white";
    } else if (theme === true) {
      body.style.backgroundColor = "#292929";
    }
  }, [theme]);

  return (
    <SignInContext.Provider value={{ theme, setTheme, signedIn, setSignedIn }}>
      {children}
    </SignInContext.Provider>
  );
}

export default SignInProvider;
