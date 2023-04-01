import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import { CurrentBook } from "./CurrentBook";
import { NoCurrentBook } from "./NoCurrentBook";

export function CurrentReading() {
 const { groupData } = useContext(GroupContext);
 const currentBook = groupData?.CurrentReading;
 return (
  <CurrentReadingDiv>
   <h3>Leitura Atual</h3>
   {currentBook?.id == undefined ? <NoCurrentBook /> : <CurrentBook />}
  </CurrentReadingDiv>
 );
}

export const CurrentReadingDiv = styled.div`
 margin-top: 30px;
 width: 830px;
 display: flex;
 flex-direction: column;
 h3 {
  margin-top: 20px;
  font-size: 28px;
  font-weight: 500;
  padding-left: 50px;
 }
`;
