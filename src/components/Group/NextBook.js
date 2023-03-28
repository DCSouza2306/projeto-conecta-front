import styled from "styled-components";
import { BookTitleAndDate } from "./BookTitleAndDate";

export function NextBook() {
 return (
  <NextBookDiv>
   {" "}
   <img src="https://m.media-amazon.com/images/I/81zN7udGRUL.jpg" alt="livro" />
   <BookTitleAndDate>
    <div>
     <p>Duna</p>
     <p>Frank Hebert</p>
    </div>
    <p> 24/05 a 24/06</p>
   </BookTitleAndDate>
  </NextBookDiv>
 );
}

const NextBookDiv = styled.div`
 width: 100%;
 height: 120px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 30px;
 margin-top: 40px;

 img {
  height: 120px;
  border-radius: 5px;
 }
`;
