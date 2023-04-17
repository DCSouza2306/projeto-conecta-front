import styled from "styled-components";
import { CurrentReading } from "./CurrentReading";
import { NextReadings } from "./NextReadings";
import ButtonStyled from "../Layout/ButtonStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";

export function EditReadinListBox() {
    const navigate = useNavigate();
    const urlQuery = useQuery()
    const {groupId} = useParams()
    function navigateAddBook(){
        urlQuery.set("options", "add-book");
        navigate(`/group/${groupId}/edit?options=add-book`)
    }
 return (
  <EditReadinListBoxDiv>
   <CurrentNextDiv>
    <CurrentReading />
    <div className="line-edit-reading" />
    <NextReadings />
   </CurrentNextDiv>

   <ButtonAddBook onClick={() => navigateAddBook()}>Adicionar novo livro</ButtonAddBook>
  </EditReadinListBoxDiv>
 );
}

const EditReadinListBoxDiv = styled.div`
 display: flex;
 flex-direction: column;
align-items: center;
 .line-edit-reading {
  margin-top: 2rem;
  width: 1px;
  height: 350px;
  background-color: #5c548c;
 }
`;
const CurrentNextDiv = styled.div`
 display: flex;
`;

const ButtonAddBook = styled(ButtonStyled)`
width: 385px;
height: 90px;
font-size: 2rem;
margin-top: 2rem;
`
