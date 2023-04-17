import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../context/groupContext";
import { UserBook } from "../User/UserBook";

export function CurrentReading() {
 const { groupData } = useContext(GroupContext);
 const currentReading = groupData?.CurrentReading;
 return (
  <CurrentReadingDiv>
   <h3>Leitura Atual</h3>
   <ul>
    <UserBook
     id={currentReading?.id}
     urlImage={currentReading?.urlImage}
     title={currentReading?.title}
    />
   </ul>
  </CurrentReadingDiv>
 );
}

const CurrentReadingDiv = styled.div`
 width: 315px;
 height: 395px;
 padding-left: 2rem;

 h3 {
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
 }

 ul{
    display: flex;
 }
`;
