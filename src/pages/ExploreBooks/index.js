import { Header } from "../../components/Header/Header";
import styled from "styled-components";
import Container from "../../components/Container";
import { Book } from "../../components/ExploreBooks/BookExplore";
import { Loading } from "../../components/Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { useBookData } from "../../hooks/useBookData";
import { useBooksCount } from "../../hooks/api/useBooksCount";

export function ExploreBooks() {
 const navigate = useNavigate();
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
 const { bookData, bookLoading, bookError } = useBookData(offset, limit);
 const { bookCountData: count } = useBooksCount();

 const numPages = Math.ceil(count?.count / parseInt(limit));

 function handlePage(param) {
  if (param === "NEXT") {
   setPage(page + 1);
   const next = parseInt(offset) + parseInt(limit);
   urlQuery.set("offset", next);
  }
  if (param === "PREVIEW") {
   setPage(page - 1);
   const preview = parseInt(offset) - parseInt(limit);
   urlQuery.set("offset", preview);
  }
  offset = urlQuery.get("offset");
  navigate(`/books?offset=${offset}&limit=${limit}`);
 }

 return (
  <ExploreBooksSection>
   <Header />

   {bookError || bookLoading ? (
    <Loading />
   ) : (
    <Container>
     <h2>Livros</h2>
     <div className="book-list">
      {bookData.map((e) => {
       return (
        <Book
         key={e.id}
         id={e.id}
         title={e.title}
         urlImage={e.urlImage}
         author={e.author}
        />
       );
      })}
     </div>
     <div className="select-page-books">
      <button
       onClick={() => handlePage("PREVIEW")}
       className="buttons-page-preview" //eslint-disable-next-line
       disabled={page == 1}
      >
       Anterior
      </button>
      <div className="num-pages-books">
       <div className="actual-page">
        <p>{page}</p>
       </div>
       <p>de</p>
       <p>{numPages}</p>
      </div>
      <button
       onClick={() => handlePage("NEXT")}
       className="buttons-page-next" //eslint-disable-next-line
       disabled={page == numPages}
      >
       Proximo
      </button>
     </div>
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

 .select-page-books {
  margin: 0 auto;
  width: 400px;
  display: flex;
  justify-content: space-between;

  .buttons-page-preview,
  .buttons-page-next {
   width: 120px;
   height: 40px;
   font-size: 1.3rem;
   border: 0.2rem solid #8e82d9;
   border-radius: 5px;
   background-color: #ffffff;
   font-family: "Raleway", sans-serif;
   cursor: pointer;
  }

  .buttons-page-preview {
   :disabled {
    visibility: hidden;
   }
  }

  .buttons-page-next {
   :disabled {
    visibility: hidden;
   }
  }

  .num-pages-books {
   width: 120px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   font-size: 1.3rem;

   .actual-page {
    background-color: #e6e3f9;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   }
  }
 }
`;
