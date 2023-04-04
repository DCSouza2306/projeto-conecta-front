import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function BookExplore({ id, urlImage, author, title }) {
 const navigate = useNavigate();

 function navigateBook() {    
  navigate(`/explore/book/${id}`);
 }
 return (
  <BookDiv>
   <img src={urlImage} alt="Livro" onClick={() => navigateBook()} />
   <p className="book-list-title">{title} </p>
   <p className="book-list-author">{author}</p>
  </BookDiv>
 );
}

const BookDiv = styled.div`
 margin-top: 0.5rem;
 margin-left: 1.45rem;
 width: 150px;
 height: 320px;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 0.5rem;
 img {
  width: 130px;
  height: 185px;
  border-radius: 5px;
  cursor: pointer;
 }

 .book-list-title {
  width: 130px;
  max-height: 3.6rem;
  font-size: 1.2rem;
  margin-top: 0.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
 }

 .book-list-author {
  color: #666666;
  width: 130px;
  margin-top: 0.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
 }
`;
