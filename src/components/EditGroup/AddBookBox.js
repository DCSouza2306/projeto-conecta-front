import styled from "styled-components";
import { useContext, useState } from "react";
import { useSearchBook } from "../../hooks/api/useBooks";
import UserContext from "../../context/userContext";
import { SearchBookList } from "./SearchBook";
import dayjs from "dayjs";
import { SelectedBook } from "./SelectedBook";
import { useNavigate, useParams } from "react-router-dom";
import ButtonStyled from "../Layout/ButtonStyled";
import { useCreateBookList } from "../../hooks/api/useBookList";
import Swal from "sweetalert2";
import GroupContext from "../../context/groupContext";
import { useGroupId } from "../../hooks/api/useGroupId";

export function AddBookBox() {
 const { groupId } = useParams();
 const navigate = useNavigate()
 const [search, setSearch] = useState("");
 const [resultSearch, setResultSearch] = useState([]);
 const [selected, setSelected] = useState({});
 const [start, setStart] = useState("");
 const [finish, setFinish] = useState("");
 const { createBookListLoading, createBookList } = useCreateBookList();
 const { searchBook } = useSearchBook();
 const {setGroupData} = useContext(GroupContext);
 const {getGroupById} = useGroupId(groupId, false)
 const { userProfileData } = useContext(UserContext);
 const token = userProfileData?.token;

 async function handleSearch(e) {
  setSearch(e.target.value);
  const currentSearch = e.target.value;

  if (currentSearch.length > 0) {
   try {
    const data = await searchBook(currentSearch, token);
    setResultSearch(data);
   } catch (error) {
    console.log(error);
   }
  }

  if (currentSearch.length == 0) {
   setResultSearch([]);
  }
 }

 async function saveBookList() {
  const body = {
   bookId: selected.id,
   startAt: dayjs(start).toDate().toISOString(),
   finishAt: dayjs(finish).toDate().toISOString(),
   status: "NEXT",
  };

  try{
    await createBookList(body, token, groupId, "create_reading_list")
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Livro adicionado com sucesso'
      })

      const group = await getGroupById(groupId);
      setGroupData(group);

      navigate(`/group/${groupId}/edit?options=book-list`)
  } catch(error){
    Swal.fire(
        'Ação não permitida',
        'Você não possui permissão para essa ação',
        'warning'
      )
    console.log(error)
  }
 }

 return (
  <AddBookBoxDiv>
   <SearchBook>
    <LabelInput>
     <label htmlFor="Search">Buscar Livro</label>
     <input
      type="text"
      id="Search"
      value={search}
      onChange={handleSearch}
      required
     ></input>
     {(resultSearch.length === 0 || resultSearch === []) && (
      <p className="no-result-search">Sem resultados</p>
     )}
     {resultSearch.length > 0 && (
      <ul>
       {resultSearch.map((e) => {
        return (
         <SearchBookList
          key={e.id}
          id={e.id}
          title={e.title}
          author={e.author}
          urlImage={e.urlImage}
          setSelected={setSelected}
         />
        );
       })}
      </ul>
     )}
    </LabelInput>
    <ButtonSave onClick={() => saveBookList()} disabled={createBookListLoading}>
     Salvar
    </ButtonSave>
   </SearchBook>
   <div className="line-add-book" />
   <StartFinish>
    <LabelInput>
     <label htmlFor="Start">Inicio da Leitura</label>
     <input
      type="date"
      id="Start"
      value={start}
      onChange={(e) => setStart(e.target.value)}
      required
     ></input>
    </LabelInput>

    <LabelInput>
     <label htmlFor="Finish">Fim da Leitura</label>
     <input
      type="date"
      id="Finish"
      value={finish}
      onChange={(e) => setFinish(e.target.value)}
      required
     ></input>
    </LabelInput>
    <h4>Livro Escolhido</h4>
    {!selected.id && <p>Nenhum livro selecionado</p>}
    {selected.id && (
     <ul>
      <SelectedBook
       id={selected.id}
       title={selected.title}
       author={selected.author}
       urlImage={selected.urlImage}
      />
     </ul>
    )}
   </StartFinish>
  </AddBookBoxDiv>
 );
}

const AddBookBoxDiv = styled.div`
 display: flex;
 margin-top: 2rem;
 .line-add-book {
  margin-top: 2rem;
  width: 1px;
  height: 550px;
  background-color: #5c548c;
 }

 .no-result-search {
  height: 352px;
 }
`;

const ButtonSave = styled(ButtonStyled)`
 width: 385px;
 height: 80px;
 font-size: 1.8rem;
 align-self: center;
 margin-top: 2rem;
`;

const SearchBook = styled.div`
 width: 674px;
 height: 691px;
 padding-left: 2rem;
 display: flex;
 flex-direction: column;
`;

const LabelInput = styled.div`
 display: flex;
 flex-direction: column;

 ul {
  display: flex;
  margin-top: 2rem;
  height: 320px;
  overflow: hidden;
  overflow-x: scroll;
 }
 label {
  font-size: 1.3rem;
 }

 input {
  font-family: "Raleway", sans-serif;
  font-size: 1.3rem;
  width: 520px;
  height: 50px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: 1px solid #8e82d9;
  :focus {
   box-shadow: 0 0 0 0;
   outline: 0;
  }
 }
`;

const StartFinish = styled.div`
 width: 567px;
 height: 691px;
 padding-left: 3rem;
 #Start,
 #Finish {
  width: 285px;
 }

 h4 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
 }
`;
