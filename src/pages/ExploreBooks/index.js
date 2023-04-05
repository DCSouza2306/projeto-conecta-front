import { Header } from "../../components/Header/Header";
import styled from "styled-components";
import Container from "../../components/Layout/Container";
import { BookExplore } from "../../components/ExploreBooks/BookExplore";
import { Loading } from "../../components/Utils/Loading";
import { useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import { useBookData } from "../../hooks/useBookData";
import { useBooksCount } from "../../hooks/api/useBooksCount";
import { Pagination } from "../../components/Pagination/Pagination";

export function ExploreBooks() {
 const urlQuery = useQuery();
 let offset = urlQuery.get("offset");
 let limit = urlQuery.get("limit");
 if (offset === null) {
  offset = 0;
 }
 if (limit === null) {
  limit = 14;
 }
 const [page, setPage] = useState(1);
 const { booksData, booksLoading, booksError } = useBookData(offset, limit);
 const { booksCountData: count } = useBooksCount();

 const numPages = Math.ceil(count?.count / parseInt(limit));

 return (
  <ExploreBooksSection>
   <Header />

   {booksError || booksLoading ? (
    <Loading />
   ) : (
    <Container>
     <h2>Livros</h2>
     <div className="book-list">
      {booksData.map((e) => {
       return (
        <BookExplore
         key={e.id}
         id={e.id}
         title={e.title}
         urlImage={e.urlImage}
         author={e.author}
        />
       );
      })}
     </div>
     <Pagination page={page} numPages={numPages} setPage={setPage} offset={offset} limit={limit} />
    </Container>
   )}
  </ExploreBooksSection>
 );
}

const ExploreBooksSection = styled.section`
 h2 {
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 3rem;
  text-align: center;
 }

 .book-list {
  display: flex;
  width: 1240px;
  flex-wrap: wrap;
 }
`;
