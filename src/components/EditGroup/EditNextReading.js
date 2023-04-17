import { useContext, useState } from "react";
import styled from "styled-components";
import BackgroundContext from "../../context/backgroundContext";
import BookContext from "../../context/bookContext";
import ButtonStyled from "../Layout/ButtonStyled";
import dayjs from "dayjs";
import { useUpdateBookList } from "../../hooks/api/useBookList";
import UserContext from "../../context/userContext";
import GroupContext from "../../context/groupContext";
import { useGroupId } from "../../hooks/api/useGroupId";
import Swal from "sweetalert2";
import { useDeleteBookList } from "../../hooks/api/useBookList";

export function EditNextReading() {
 const { enable, setEnable } = useContext(BackgroundContext);
 const { selected } = useContext(BookContext);
 const {groupData, setGroupData} = useContext(GroupContext);
 const groupId = groupData?.id;
 const { getGroupById } = useGroupId(groupId, false);
 const { updateBookListLoading, updateBookList } = useUpdateBookList();
 const {deleteBookListLoading, deleteBookList} = useDeleteBookList()
 const { userProfileData } = useContext(UserContext);
 const token = userProfileData?.token;
 const dateStart = dayjs(selected?.start).format("YYYY-MM-DD")
 const dateFinish = dayjs(selected?.finish).format("YYYY-MM-DD")
 const [start, setStart] = useState(dateStart);
 const [finish, setFinish] = useState(dateFinish);
 async function saveChanges(){
    const body = {
        bookId: selected.id,
        finishAt: dayjs(finish).toDate().toISOString(),
        startAt: dayjs(start).toDate().toISOString(),
        status: selected.status,
       };
       console.log(body);
     
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

 function close(){
    setEnable(!enable)
 }

 async function changeStatus(){
    const body = {
        bookId: selected.id,
        finishAt: dayjs(finish).toDate().toISOString(),
        startAt: dayjs(start).toDate().toISOString(),
        status: "CURRENT",
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

 async function deleteBook(){
   try {
      setEnable(!enable);
      await deleteBookList(selected.id, token, groupId, "delete_reading_list");
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
  <EditNextReadingDiv display={enable}>
   <h2>Editar Livro</h2>
   <p>{selected?.title}</p>
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
    <button onClick={() => changeStatus()} >Tornar leitura atual</button>
   </InputsEdit>
   <ButtonSave onClick={() => saveChanges()}>Salvar Alterações</ButtonSave>
   <ButtonsLeaveDelete>
    <button disabled={deleteBookListLoading} className="delete-current-reading" onClick={() => deleteBook()} >Excluir Leitura</button>
    <button className="leave-current-modal" onClick={() => close()}>
     Sair
    </button>
   </ButtonsLeaveDelete>
  </EditNextReadingDiv>
 );
}

const EditNextReadingDiv = styled.div`
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
