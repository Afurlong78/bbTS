import { createContext, useContext, useState, useEffect } from "react";
import { ContextProps, MonthsTypes, Month } from "../global/Types";

const MonthsContext = createContext({} as MonthsTypes);

export const useMonthsContext = () => {
  return useContext(MonthsContext);
};

export function MonthsProvider({ children }: ContextProps) {
  const [months, setMonths] = useState<Month>({
    january: 0,
    february: 0,
    march: 0,
    april: 0,
    may: 0,
    june: 0,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    novemeber: 0,
    decemeber: 0,
  });

  return (
    <MonthsContext.Provider value={{ months, setMonths }}>
      {children}
    </MonthsContext.Provider>
  );
}

export default MonthsProvider;
