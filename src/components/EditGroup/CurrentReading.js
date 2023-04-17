import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../context/groupContext";
import { UserBook } from "../User/UserBook";
import BackgroundContext from "../../context/backgroundContext";

export function CurrentReading() {
 const { groupData } = useContext(GroupContext);
 const { enable, setEnable, setTypeContainer } = useContext(BackgroundContext);
 const currentReading = groupData?.CurrentReading;
 function changeCurrent() {
  if (currentReading?.id) {
   setEnable(!enable);
   setTypeContainer("CURRENT");
  }
 }
 return (
  <CurrentReadingDiv>
   <h3 onClick={() => changeCurrent()}>Leitura Atual</h3>
   <ul>
    {!currentReading?.id && <p>Não há leitura atual</p>}
    {currentReading?.id && (
     <UserBook
      id={currentReading?.id}
      urlImage={currentReading?.urlImage}
      title={currentReading?.title}
     />
    )}
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
  cursor: pointer;
 }

 ul {
  display: flex;
 }
`;
