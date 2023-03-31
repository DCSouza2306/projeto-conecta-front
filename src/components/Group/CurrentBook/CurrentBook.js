import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import Box from "../../Box";
import { BookTitleAndDate } from "../BookTitleAndDate";
import dayjs from "dayjs";

export function CurrentBook() {
 const { groupData } = useContext(GroupContext);
 const currentBook = groupData?.CurrentReading;

 return (
  <CurrentBookDiv>
   <img src={currentBook?.urlImage} alt="livro" />
   <div className="book-informations">
    <BookTitleAndDate>
     <div>
      <p>{currentBook?.title}</p>
      <p>{currentBook?.author}</p>
     </div>
     <p> {`${dayjs(currentBook?.start).format("DD/MM")} a ${dayjs(currentBook?.finish).format("DD/MM/YYYY")}`}</p>
    </BookTitleAndDate>
    <div className="book-informations-bottom">
     A vida do jovem Paul Atreides está prestes a mudar radicalmente. Após a
     visita de uma mulher misteriosa, ele é obrigado a deixar seu planeta natal
     para sobreviver ao ambiente árido e severo de Arrakis, o Planeta Deserto.
     Envolvido numa intrincada teia política e religiosa, Paul divide-se entre
     as obrigações de herdeiro e seu treinamento nas doutrinas secretas de uma
     antiga irmandade, que vê nele a esperança de realização de um plano urdido
     há séculos.
    </div>
   </div>
  </CurrentBookDiv>
 );
}

const CurrentBookDiv = styled(Box)`
 margin-top: 30px;
 width: 785px;
 height: 330px;
 align-items: center;
 justify-content: center;
 img {
  width: 160px;
  height: 230px; 
  border-radius: 5px;
  margin-right: 40px;
 }
 .book-informations-bottom {
  margin-top: 20px;
  font-size: 20px;
  text-align: justify;
  width: 500px;
  overflow: hidden;
  height: 10ch;
 }
`;
