import styled from "styled-components";
import { UserBook } from "../User/UserBook";
import { useContext } from "react";
import GroupContext from "../../context/groupContext";

export function NextReadings() {
    const { groupData } = useContext(GroupContext);
    const nextReadings = groupData?.NextReadings;
 return (
  <NextReadingsDiv>
   <h3>Proximas Leituras</h3>
   <ul>
      {nextReadings.length === 0 && <p>Não há proximas leituras</p>}
    {nextReadings?.map((e) => {
        return <UserBook
        key={e.id}
        id={e.id}
        urlImage={e.urlImage}
        title={e.title}
       />
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
 }

 ul{
    display: flex;
 }
`;
