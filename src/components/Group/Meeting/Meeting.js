import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import { MeetingBox } from "./MeetingBox";
import { NoMeeting } from "./NoMeeting";

export function Meeting() {
 const { groupData } = useContext(GroupContext);

 const meeting = groupData?.Meeting;
 return (
  <MeetingDiv>
   <h3>Encontro</h3>
   {meeting?.id === undefined ? <NoMeeting /> : <MeetingBox />}
  </MeetingDiv>
 );
}

const MeetingDiv = styled.div`
 margin-top: 30px;
 width: 410px;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 h3 {
  margin-top: 20px;
  font-size: 28px;
  font-weight: 500;
  align-self: flex-start;
  padding-left: 50px;
 }
`;
