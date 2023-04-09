import { useContext } from "react";
import UserContainer from "../Layout/UserContainer";
import UserContext from "../../../context/userContext";
import { UserBook } from "../UserBook";

export function CurrentReadingsBox() {
 const { userData } = useContext(UserContext);
 const currentReading = userData?.CurrentReadings;
 return (
  <UserContainer>
   {currentReading?.length === 0 ? (
    <p>Não há leituras atuais</p>
   ) : (
    <ul>
     {currentReading?.map((e) => {
      return (
       <UserBook key={e.id} id={e.id} urlImage={e.urlImage} title={e.title} />
      );
     })}
    </ul>
   )}
  </UserContainer>
 );
}
