import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import Box from "../../Layout/Box";
import { BookTitleAndDate } from "../BookTitleAndDate";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export function CurrentBookBox() {
 const navigate = useNavigate();
 const { groupData } = useContext(GroupContext);
 const currentBook = groupData?.CurrentReading;

 function navigateBook() {
  navigate(`/explore/book/${currentBook?.id}`);
 }
 return (
  <CurrentBookDiv>
   {currentBook?.id === undefined ? (
    <p className="no-book-content">Não há nenhuma leitura atualmente</p>
   ) : (
    <>
     <img
      src={currentBook?.urlImage}
      alt="livro"
      onClick={() => navigateBook()}
     />
     <div className="book-informations">
      <BookTitleAndDate>
       <div>
        <p>{currentBook?.title}</p>
        <p>{currentBook?.author}</p>
       </div>
       <p>
        {`${dayjs(currentBook?.start).format("DD/MM")} a ${dayjs(
         currentBook?.finish
        ).format("DD/MM/YYYY")}`}
       </p>
      </BookTitleAndDate>
      <div className="book-informations-bottom">{currentBook?.synopsis}</div>
     </div>
    </>
   )}
  </CurrentBookDiv>
 );
}

const CurrentBookDiv = styled(Box)`
 margin-top: 1.8rem;
 width: 785px;
 height: 330px;
 align-items: center;
 justify-content: center;
 .no-book-content{
   align-self: flex-start;
   margin-top: 2.5rem;
 }
 img {
  width: 160px;
  height: 230px;
  border-radius: 5px;
  margin-right: 40px;
  cursor: pointer;
 }
 .book-informations-bottom {
  margin-top: 20px;
  font-size: 20px;
  text-align: justify;
  width: 500px;
  overflow: hidden;
  height: 10ch;
 }
`;

export default CurrentBookDiv;
