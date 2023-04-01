import dayjs from "dayjs";
import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import Box from "../../Box";
import ButtonStyled from "../../ButtonStyled";

export function MeetingBox() {
 const { groupData } = useContext(GroupContext);

 const meeting = groupData?.Meeting;
 return (
  <MeetingBoxDiv>
   <div className="meeting-informations">
    <p>Data</p>
    <p>{dayjs(meeting?.date).format("DD/MM/YYYY")}</p>
   </div>
   <div className="meeting-informations">
    <p>Horario</p>
    <p>{dayjs(meeting?.hour).format("HH:mm")}</p>
   </div>
   <div className="meeting-informations">
    <p>Link</p>
    <p>{meeting?.url}</p>
   </div>
   <div className="meeting-informations">
    <p>Mediador</p>
    <p>Usuario</p>
   </div>

   <ButtonConfirmmeeting>Confirmar Participação</ButtonConfirmmeeting>
  </MeetingBoxDiv>
 );
}

const MeetingBoxDiv = styled(Box)`
 width: 365px;
 flex-direction: column;
 height: 330px;
 padding: 1.8rem;
 margin-top: 1.8rem;

 .meeting-informations {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 30px;

  p {
   width: 125px;
   height: 22px;
   overflow: hidden;
  }
 }
`;

const ButtonConfirmmeeting = styled(ButtonStyled)`
 width: 285px;
 height: 50px;
 font-size: 20px;
`;

export default MeetingBoxDiv;
