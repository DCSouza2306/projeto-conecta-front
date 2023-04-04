import { useContext } from "react";
import styled from "styled-components";
import BookContext from "../../context/bookContext";

export function BookPrincipal() {
 const { bookData } = useContext(BookContext);

 return (
  <BookPrincipalDiv>
   <img src={bookData?.urlImage} alt="livro" />
   <div className="book-principal-informations">
    <h2>{bookData?.title}</h2>
    <h3>{bookData?.author}</h3>
    <p>
     {bookData?.synopsis}
    </p>
   </div>
  </BookPrincipalDiv>
 );
}

const BookPrincipalDiv = styled.div`
 width: 1240px;
 height: 50vh;
 display: flex;
 align-items: center;

 img {
  width: 280px;
  height: 402px;
  border-radius: 5px;
 }

 .book-principal-informations {
  height: 400px;
  width: 980px;
  padding-left: 1.45rem;

  h2 {
   font-size: 3rem;
   font-weight: 500;
   margin-bottom: 1rem;
  }

  h3 {
   font-size: 2rem;
   color: #666666;
   margin-bottom: 1rem;
  }

  p {
   font-size: 1.35rem;
   text-align: justify;
  }
 }
`;
