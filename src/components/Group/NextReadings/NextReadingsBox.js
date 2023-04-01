import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import Box from "../../Box";
import { NextBook } from "./NextBook";

export function NextReadingsBox() {
 const { groupData } = useContext(GroupContext);
 const nextReadings = groupData?.NextReadings;

 return (
  <NextReadingsBoxDiv>
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
  </NextReadingsBoxDiv>
 );
}

const NextReadingsBoxDiv = styled(Box)`
 width: 770px;
 height: 690px;
 margin-top: 30px;
 display: flex;
 flex-direction: column;
`;

export default NextReadingsBoxDiv;
