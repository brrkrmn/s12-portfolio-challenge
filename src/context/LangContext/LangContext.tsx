import { createContext, useContext } from "react";
import { LangContextValue } from "./LangContext.types";

export const LangContext = createContext<LangContextValue>(null);

export const useLangContext = () => {
  const context = useContext(LangContext);
  if (context === null) throw new Error("You can only call this hook inside LangContextProvider")
  return context;
}

const LangContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LangContext.Provider
      value={{

      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export default LangContextProvider