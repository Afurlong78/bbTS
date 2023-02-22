import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ContextProps, MonthsTypes, Month } from "../global/Types";
import { monthKeys } from "../utils/monthKeys";

const MonthsContext = createContext({} as MonthsTypes);

export const useMonthsContext = () => {
  return useContext(MonthsContext);
};

export function MonthsProvider({ children }: ContextProps) {
  //vlaue = (month budget) - (month expenses array)
  const [months, setMonths] = useState<Month[]>([
    { month: "January", value: 0 },
    { month: "February", value: 0 },
    { month: "March", value: 0 },
    { month: "April", value: 0 },
    { month: "May", value: 0 },
    { month: "June", value: 0 },
    { month: "July", value: 0 },
    { month: "August", value: 0 },
    { month: "Spetember", value: 0 },
    { month: "October", value: 0 },
    { month: "November", value: 0 },
    { month: "December", value: 0 },
  ]);

  const updateMonths = useCallback(() => {
    
  }, []);

  return (
    <MonthsContext.Provider value={{ months, setMonths }}>
      {children}
    </MonthsContext.Provider>
  );
}

export default MonthsProvider;
