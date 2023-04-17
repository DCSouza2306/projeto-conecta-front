import { createContext } from "react";
import { useState } from "react";

const BackgroundContext = createContext();

export default BackgroundContext;

export function BackgroundProvider({ children }) {
 const [enable, setEnable] = useState(false);
 const [typeContainer, setTypeContainer] = useState("")
 return (
  <BackgroundContext.Provider value={{enable, setEnable, typeContainer, setTypeContainer }}>
   {children}
  </BackgroundContext.Provider>
 );
}