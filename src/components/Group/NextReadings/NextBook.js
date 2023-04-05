import styled from "styled-components";
import { BookTitleAndDate } from "../BookTitleAndDate";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export function NextBook({id, urlImage, title, author, start, finish}) {
    const navigate = useNavigate()
function navigateBook(){
    navigate(`/explore/book/${id}`)
}
 return (
  <NextBookLi>
   <img src={urlImage} alt="livro" onClick={() => navigateBook()}/>
   <BookTitleAndDate>
    <div>
     <p>{title}</p>
     <p>{author}</p>
    </div>
    <p>{`${dayjs(start).format("DD/MM")} a ${dayjs(finish).format("DD/MM/YYYY")}`}</p>
   </BookTitleAndDate>
  </NextBookLi>
 );
}

const NextBookLi = styled.li`
 width: 100%;
 height: 120px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 30px;
 margin-top: 40px;

 img {
  height: 120px;
  width: 80px;
  border-radius: 5px;
  cursor: pointer;
 }
`;
