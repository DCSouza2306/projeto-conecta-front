import { useContext } from "react";
import styled from "styled-components";
import BookContext from "../../../context/bookContext";
import { CurrentReadingsGroupsList } from "./CurrentReadingsGroupsList";
import { NoCurrentReadingsGroups } from "./NoCurrentReadingsGroup";

export function CurrentReadingsGroups() {
 const { bookData } = useContext(BookContext);
 const currentReadings = bookData?.CurrentReadings;
 return (
  <CurrentReadingsGroupsDiv>
   <h3>
    Grupos que estão <br /> lendo este livro
   </h3>
   {currentReadings?.length === 0 ? (
    <NoCurrentReadingsGroups />
   ) : (
    <CurrentReadingsGroupsList />
   )}
  </CurrentReadingsGroupsDiv>
 );
}

const CurrentReadingsGroupsDiv = styled.div`
 width: 335px;
 height: 40vh;
 display: flex;
 flex-direction: column;
 align-items: end;
 h3 {
  align-self: center;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1rem;
  margin-left: 2.25rem;
  height: 80px;
 }
`;
