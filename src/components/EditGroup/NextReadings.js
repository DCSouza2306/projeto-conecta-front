import styled from "styled-components";
import { UserBook } from "../User/UserBook";
import { useContext } from "react";
import GroupContext from "../../context/groupContext";
import BackgroundContext from "../../context/backgroundContext";
import { NextBookList } from "./NextBookList";
import { useState } from "react";

export function NextReadings() {
 const { enable, setEnable, setTypeContainer } = useContext(BackgroundContext);
 const { groupData } = useContext(GroupContext);
 const nextReadings = groupData?.NextReadings;
  return (
   <NextReadingsDiv>
    <h3>Proximas Leituras</h3>
    <ul>
     {nextReadings?.length === 0 && <p>Não há proximas leituras</p>}
     {nextReadings?.map((e) => {
      return (
       <NextBookList 
       key={e.id} 
       id={e.id} 
       urlImage={e.urlImage} 
       title={e.title} 
       author={e.author}
        start={e.start}
        finish={e.finish}
        status={e.status}
       />
      );
     })}
    </ul>
   </NextReadingsDiv>
  );
 }


const NextReadingsDiv = styled.div`
 width: 924px;
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
