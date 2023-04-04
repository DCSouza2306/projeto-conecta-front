import { BookPrincipal } from "../../components/Book/BookPrincipal";
import { CurrentReadingsGroups } from "../../components/Book/CurrentReadings/CurrentReadingsGroups";
import { NextReadingsGroups } from "../../components/Book/NextReadings/NextReadingsGroups";
import { Header } from "../../components/Header/Header";
import Container from "../../components/Container";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { useBookById } from "../../hooks/api/useBookById";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import BookContext from "../../context/bookContext";

export function Book() {
 const { bookId } = useParams();
 const { bookError, bookLoading, bookData } = useBookById(bookId);
 const { setBookData } = useContext(BookContext);
 console.log(bookData);
 useEffect(() => {
  setBookData(bookData);
 }, [bookLoading]);
 return (
  <BookSection>
   <Header />
   {bookError || bookLoading ? (
    <Loading />
   ) : (
    <BookContainer>
     <BookPrincipal />
     <div className="book-groups-infos">
      <NextReadingsGroups />
      <div className="line-book-page" />
      <CurrentReadingsGroups />
     </div>
    </BookContainer>
   )}
  </BookSection>
 );
}

const BookSection = styled.section``;
const BookContainer = styled(Container)`
 .book-groups-infos {
  display: flex;

  .line-book-page {
   width: 1px;
   height: 280px;
   background-color: #9795a6;
   margin-top: 5rem;
  }
 }
`;
