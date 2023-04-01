import { Header } from "../../components/Header/Header";
import styled from "styled-components";
import Container from "../../components/Container";
import { Book } from "../../components/Book/Book";

export function Books() {
 return (
  <BooksSection>
   <Header />
   <Container>
    <h2>Livros</h2>
    <div className="book-list">
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
     <Book />
    </div>
   </Container>
  </BooksSection>
 );
}

const BooksSection = styled.section`
 h2 {
  margin-top: 60px;
  margin-bottom: 1.8rem;
  font-size: 3rem;
  text-align: center;
 }

 .book-list{
    display: flex;
    flex-wrap: wrap;
    :first-child{
        color: white !important;
    }
 }
`;
