import { useContext } from "react";
import styled from "styled-components";
import BackgroundContext from "../../context/backgroundContext";
import { useState } from "react";
import GroupContext from "../../context/groupContext";
import UserContext from "../../context/userContext";
import ButtonStyled from "../Layout/ButtonStyled";
import dayjs from "dayjs";
import { useUpdateBookList } from "../../hooks/api/useBookList";
import { useGroupId } from "../../hooks/api/useGroupId";
import Swal from "sweetalert2";

export function EditCurrentReading() {
 const { enable, setEnable } = useContext(BackgroundContext);
 const { updateBookListLoading, updateBookList } = useUpdateBookList();
 const { groupData, setGroupData } = useContext(GroupContext);
 const { userProfileData } = useContext(UserContext);
 const token = userProfileData?.token;
 const groupId = groupData?.id;
 const { getGroupById } = useGroupId(groupId, false);
 const currentReading = groupData?.CurrentReading;
 const dateStart = dayjs(currentReading.start).format("YYYY-MM-DD");
 const dateFinish = dayjs(currentReading.finish).format("YYYY-MM-DD");
 const [start, setStart] = useState(dateStart);
 const [finish, setFinish] = useState(dateFinish);
 function close() {
  setEnable(!enable);
 }

 async function saveChanges() {
  const body = {
   bookId: currentReading.id,
   finishAt: dayjs(finish).toDate().toISOString(),
   startAt: dayjs(start).toDate().toISOString(),
   status: currentReading.status,
  };

  try {
   setEnable(!enable);
   await updateBookList(body, token, groupId, "edit_reading_list");
   const group = await getGroupById(groupId);
   setGroupData(group);
  } catch (error) {
   console.log(error);
   Swal.fire(
    "Ação não permitida",
    "Você não possui permissão para essa ação",
    "warning"
   );
  }
 }

 async function finishReading() {
  const body = {
   bookId: currentReading.id,
   finishAt: dayjs(finish).toDate().toISOString(),
   startAt: dayjs(start).toDate().toISOString(),
   status: "READ",
  };

  try {
   setEnable(!enable);
   await updateBookList(body, token, groupId, "edit_reading_list");
   const group = await getGroupById(groupId);
   setGroupData(group);
  } catch (error) {
   console.log(error);
   Swal.fire(
    "Ação não permitida",
    "Você não possui permissão para essa ação",
    "warning"
   );
  }
 }
 return (
  <EditCurrentReadingDiv display={enable}>
   <h2>Editar Leitura Atual</h2>
   <InputsEdit>
    <div>
     <LabelInputDiv>
      <label>Inicio da Leitura</label>
      <input
       type="date"
       value={start}
       onChange={(e) => setStart(e.target.value)}
       required
      ></input>
     </LabelInputDiv>
     <LabelInputDiv>
      <label>Termino da leitura</label>
      <input
       type="date"
       value={finish}
       onChange={(e) => setFinish(e.target.value)}
       required
      ></input>
     </LabelInputDiv>
    </div>
    <button onClick={() => finishReading()}>Conclui Leitura</button>
   </InputsEdit>
   <ButtonSave onClick={() => saveChanges()}>Salvar Alterações</ButtonSave>
   <ButtonsLeaveDelete>
    <button className="delete-current-reading">Excluir Leitura</button>
    <button className="leave-current-modal" onClick={() => close()}>
     Sair
    </button>
   </ButtonsLeaveDelete>
  </EditCurrentReadingDiv>
 );
}

const EditCurrentReadingDiv = styled.div`
 width: 895px;
 height: 525px;
 padding-top: 2rem;
 background-color: #e6e3f9;
 border-radius: 25px;
 transition: opacity 2s visibility 1s;
 visibility: ${(props) => (props.display ? "" : "hidden")};
 opacity: ${(props) => (props.display ? "100%" : "0%")};
 display: flex;
 flex-direction: column;
 align-items: center;

 h2 {
  font-size: 2rem;
 }
`;

const InputsEdit = styled.div`
 display: flex;
 button {
  height: 50px;
  width: 200px;
  margin-top: 4.3rem;
  margin-left: 3rem;
  background-color: #83b147;
  color: #ffffff;
  border-radius: 15px;
  border: none;
  cursor: pointer;
 }
`;

const LabelInputDiv = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 2rem;

 label {
  font-size: 1.3rem;
 }

 input {
  font-family: "Raleway", sans-serif;
  font-size: 1.3rem;
  width: 285px;
  height: 50px;
  margin-top: 1rem;
  border-radius: 5px;
  border: 1px solid #8e82d9;
  :focus {
   box-shadow: 0 0 0 0;
   outline: 0;
  }
 }
`;

const ButtonSave = styled(ButtonStyled)`
 width: 330px;
 height: 75px;
 font-size: 1.8rem;
 margin-top: 2rem;
`;

const ButtonsLeaveDelete = styled.div`
 margin-top: 2rem;
 width: 450px;
 display: flex;
 justify-content: space-between;

 .leave-current-modal,
 .delete-current-reading {
  width: 200px;
  height: 35px;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
 }

 .leave-current-modal {
  background-color: #838e9e;
 }

 .delete-current-reading {
  background-color: #e95a5a;
 }
`;
