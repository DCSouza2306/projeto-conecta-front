import dayjs from "dayjs";
import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import Box from "../../Box";
import ButtonStyled from "../../ButtonStyled";

export function MettingBox() {
 const { groupData } = useContext(GroupContext);

 const meeting = groupData?.Meeting;
 console.log(meeting);
 return (
  <MettingBoxDiv>
   <div className="metting-informations">
    <p>Data</p>
    <p>{dayjs(meeting?.date).format("DD/MM/YYYY")}</p>
   </div>
   <div className="metting-informations">
    <p>Horario</p>
    <p>{dayjs(meeting?.hour).format("HH:mm")}</p>
   </div>
   <div className="metting-informations">
    <p>Link</p>
    <p>{meeting?.url}</p>
   </div>
   <div className="metting-informations">
    <p>Mediador</p>
    <p>Usuario</p>
   </div>

   <ButtonConfirmMetting>Confirmar Participação</ButtonConfirmMetting>
  </MettingBoxDiv>
 );
}

const MettingBoxDiv = styled(Box)`
 width: 365px;
 flex-direction: column;
 height: 330px;
 padding: 30px;
 margin-top: 30px;

 .metting-informations {
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

const ButtonConfirmMetting = styled(ButtonStyled)`
 width: 285px;
 height: 50px;
 font-size: 20px;
`;
