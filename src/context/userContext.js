import { createContext } from "react";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
 const [userData, setUserData] = useState();
 const [userProfileData, setUserProfileData] = useLocalStorage("userData", {});
 return (
  <UserContext.Provider value={{userData, setUserData, userProfileData, setUserProfileData  }}>
   {children}
  </UserContext.Provider>
 );
}
