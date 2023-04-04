import { BookPrincipal } from "../../components/Book/BookPrincipal";
import { CurrentReadingsGroups } from "../../components/Book/CurrentReadings/CurrentReadingsGroups";
import { NextReadingsGroups } from "../../components/Book/NextReadings/NextReadingsGroups";
import { Header } from "../../components/Header/Header";
import Container from "../../components/Container";
import { Loading } from "../../components/Loading";
import styled from "styled-components";

export function Book() {
 return (
  <BookSection>
   <Header />
   <BookContainer>
    <BookPrincipal />
    <div className="book-groups-infos">
     <NextReadingsGroups />
     <div className="line-book-page" />
     <CurrentReadingsGroups />
    </div>
   </BookContainer>
  </BookSection>
 );
}

const BookSection = styled.section``;
const BookContainer = styled(Container)`

 .book-groups-infos{
    display: flex;

    .line-book-page{
        width: 1px;
        height: 280px;
        background-color: #9795A6;
        margin-top: 5rem;
    }
 }
`;
