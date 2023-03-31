import { createContext } from "react";
import { useState } from "react";

const GroupContext = createContext();

export default GroupContext;

export function GroupProvider({ children }) {
 const [groupData, setGroupData] = useState();
 const [refresh, setRefresh] = useState(false)
 return (
  <GroupContext.Provider value={{groupData, setGroupData, refresh, setRefresh}}>
   {children}
  </GroupContext.Provider>
 );
}
