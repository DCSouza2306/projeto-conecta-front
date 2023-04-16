import dayjs from "dayjs";
import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import Box from "../../Layout/Box";
import ButtonStyled from "../../Layout/ButtonStyled";
import UserContext from "../../../context/userContext";
import { useConfirmMeeting } from "../../../hooks/api/useMeeting";
import { useGroupId } from "../../../hooks/api/useGroupId";

export function MeetingBox() {
 const { groupData, setGroupData } = useContext(GroupContext);
 const { userProfileData } = useContext(UserContext);
 const { meetingLoading, confirmMeeting } = useConfirmMeeting();
 const groupId = groupData?.id;
 const { getGroupById } = useGroupId(groupId, false);

 const token = userProfileData?.token;

 const meeting = groupData?.Meeting;

 const isConfirmed = meeting?.MeetingParticipant?.some((e) => {
  return e.userId === userProfileData?.user?.id;
 });

 async function request() {
  try {
   await confirmMeeting(token, groupId, "confirm_cancel_meeting");
   const group = await getGroupById(groupId);
   setGroupData(group);
  } catch (error) {
   console.log(error);
  }
 }

 return (
  <MeetingBoxDiv>
   {meeting?.id === undefined && <p>Não há reuniões agendadas</p>}
   {meeting?.id !== undefined && (
    <>
     <ul>
      <li>
       <p>Data</p>
       <p>{dayjs(meeting?.date).format("DD/MM/YYYY")}</p>
      </li>
      <li>
       <p>Horario</p>
       <p>{dayjs(meeting?.hour).format("HH:mm")}</p>
      </li>
      <li>
       <p>Link</p>
       <p>{meeting?.url}</p>
      </li>
      <li>
       <p>Mediador</p>
       <p>Usuario</p>
      </li>
     </ul>

     <ButtonConfirmMeeting onClick={() => request()} isConfirmed={isConfirmed}>
      {isConfirmed && <>Cancelar Participação</>}
      {!isConfirmed && <>Confirmar Participação</>}
     </ButtonConfirmMeeting>
    </>
   )}
  </MeetingBoxDiv>
 );
}

const MeetingBoxDiv = styled(Box)`
 width: 365px;
 flex-direction: column;
 height: 330px;
 padding: 1.8rem;
 margin-top: 1.8rem;

 li {
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

const ButtonConfirmMeeting = styled(ButtonStyled)`
 width: 285px;
 height: 50px;
 font-size: 20px;

 background-color: ${(props) => (!props.isConfirmed ? "" : "#E95A5A")};
`;
