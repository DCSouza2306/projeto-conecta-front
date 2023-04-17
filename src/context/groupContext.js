import { createContext } from "react";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const GroupContext = createContext();

export default GroupContext;

export function GroupProvider({ children }) {
 const [groupData, setGroupData] = useLocalStorage("userGroup", {});
 const [refresh, setRefresh] = useState(false)
 return (
  <GroupContext.Provider value={{groupData, setGroupData, refresh, setRefresh}}>
   {children}
  </GroupContext.Provider>
 );
}
