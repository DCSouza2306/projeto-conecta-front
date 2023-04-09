import { useContext } from "react";
import Wrapper from "../Layout/Wrapper";
import { NextReadingsBox } from "./NextReadingsBox";
import UserContext from "../../../context/userContext";
import { AiOutlineRight } from "react-icons/ai";

export function NextReadings() {
 const { userData } = useContext(UserContext);
 const numReadings = userData?.NextReadings.length;
 return (
  <Wrapper>
   <div className="h3-icons">
    <h3>Irei Ler</h3>
    <AiOutlineRight />
   </div>
   <h4>
    {numReadings} {numReadings > 1 ? "Livros" : "Livro"}
   </h4>
   <NextReadingsBox />
  </Wrapper>
 );
}
