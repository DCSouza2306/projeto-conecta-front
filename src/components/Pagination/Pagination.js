import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "../../hooks/useQuery";

export function Pagination({ page, numPages, setPage, offset, limit }) {
 const navigate = useNavigate();
 const urlQuery = useQuery();
 
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
  navigate(`/explore/books?offset=${offset}&limit=${limit}`);
 }
 return (
  <PaginationDiv>
   <button
    onClick={() => handlePage("PREVIEW")} //eslint-disable-next-line
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
    onClick={() => handlePage("NEXT")} //eslint-disable-next-line
    disabled={page == numPages}
   >
    Proximo
   </button>
  </PaginationDiv>
 );
}

const PaginationDiv = styled.div`
 margin: 0 auto;
 width: 400px;
 display: flex;
 justify-content: space-between;

 button {
  width: 120px;
  height: 40px;
  font-size: 1.3rem;
  border: 0.2rem solid #8e82d9;
  border-radius: 5px;
  background-color: #ffffff;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
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
`;
