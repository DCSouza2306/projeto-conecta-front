import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import Box from "../../Layout/Box";
import { NextBook } from "./NextBook";

export function NextReadingsBox() {
 const { groupData } = useContext(GroupContext);
 const nextReadings = groupData?.NextReadings;

 return (
  <NextReadingsBoxDiv>
   {nextReadings?.lenght === 0 ? (
    <p className="no-content-next-readings">Não há proximas leituras</p>
   ) : (
    <ul>
     {nextReadings?.map((e) => {
      return (
       <NextBook
        key={e.id}
        id={e.id}
        urlImage={e.urlImage}
        title={e.title}
        author={e.author}
        start={e.start}
        finish={e.finish}
       />
      );
     })}
    </ul>
   )}
  </NextReadingsBoxDiv>
 );
}

const NextReadingsBoxDiv = styled(Box)`
 width: 770px;
 height: 690px;
 margin-top: 30px;
 display: flex;
 flex-direction: column;

 .no-content-next-readings{
    text-align: center;
    margin-top: 2.5rem;
 }
`;
