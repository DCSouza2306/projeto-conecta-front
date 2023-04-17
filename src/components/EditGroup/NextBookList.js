import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import BackgroundContext from "../../context/backgroundContext";
import BookContext from "../../context/bookContext";

export function NextBookList({
 id,
 urlImage,
 title,
 author,
 start,
 finish,
 status,
}) {
 const navigate = useNavigate();
 const { enable, setEnable, setTypeContainer } = useContext(BackgroundContext);
 const { setSelected, selected } = useContext(BookContext);

 function selectBook() {
  setSelected({
   id,
   urlImage,
   title,
   author,
   start,
   finish,
   status,
  });
  setEnable(!enable);
  setTypeContainer("NEXT");
 }

 return (
  <NextBookLi>
   <img src={urlImage} alt="livro" onClick={() => selectBook()} />
   <p>{title}</p>
  </NextBookLi>
 );
}

const NextBookLi = styled.li`
 height: 255px;
 margin-right: 2rem;
 img {
  width: 120px;
  height: 172px;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
 }

 p {
  font-size: 1.25rem;
 }
`;
