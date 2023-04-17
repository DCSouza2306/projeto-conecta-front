import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function SelectedBook({ id, urlImage, title, author }) {
 return (
  <SelectedBookDiv>
   <img src={urlImage} alt="livro" />
   <AuthorTitle >
    <p className="selected-book-title" >{title}</p>
    <p className="selected-book-author" >{author}</p>
   </AuthorTitle>
  </SelectedBookDiv>
 );
}

const SelectedBookDiv = styled.li`
 height: 255px;
 margin-right: 2rem;
 display: flex;
 img {
  width: 170px;
  height: 244px;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
 }

`;

const AuthorTitle = styled.div`
margin-left: 1rem;
.selected-book-title{
    font-size: 1.65rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
}
`
