import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
 const [userData, setUserData] = useState();
 const [userProfileData, setUserProfileData] = useState()
 return (
  <UserContext.Provider value={{userData, setUserData, userProfileData, setUserProfileData  }}>
   {children}
  </UserContext.Provider>
 );
}
