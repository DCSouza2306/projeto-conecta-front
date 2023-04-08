import { useContext } from "react";
import UserContainer from "./Layout/UserContainer";
import UserContext from "../../context/userContext";
import { UserBook } from "./UserBook";

export function NextReadingsBox() {
 const { userData } = useContext(UserContext);
 const nextReadings = userData?.NextReadings;
 return <UserContainer>
    {nextReadings?.length === 0 ? (
    <p>Não há proximas leituras</p>
   ) : (
    <ul>
     {nextReadings?.map((e) => {
      return (
       <UserBook key={e.id} id={e.id} urlImage={e.urlImage} title={e.title} />
      );
     })}
    </ul>
   )}
 </UserContainer>;
}
