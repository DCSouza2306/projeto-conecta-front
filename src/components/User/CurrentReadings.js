import { useContext } from "react";
import { CurrentReadingsBox } from "./CurrentReadingsBox";
import Wrapper from "./Layout/Wrapper";
import UserContext from "../../context/userContext";
import { AiOutlineRight } from "react-icons/ai";

export function CurrentReadings() {
 const { userData } = useContext(UserContext);
 const numReadings = userData?.CurrentReadings.length;
 return (
  <Wrapper>
   <div className="h3-icons">
    <h3>Estou lendo agora</h3>
    <AiOutlineRight />
   </div>
   <h4>
    {numReadings} {numReadings > 1 ? "Livros" : "Livro"}
   </h4>
   <CurrentReadingsBox />
  </Wrapper>
 );
}
