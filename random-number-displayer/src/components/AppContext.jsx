import { createContext, useState } from "react";

export const AppContext = createContext();

export default function ContextProvider({children}) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [input, setInput] = useState("");
  const addToInput = cb => {
    cb(input, setInput);
  }; 

  return <AppContext.Provider value={{buttonNames, input, addToInput}}>
    {children}
  </AppContext.Provider>
}
