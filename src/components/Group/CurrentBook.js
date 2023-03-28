import styled from "styled-components";
import Box from "../Box";
import { BookTitleAndDate } from "./BookTitleAndDate";

export function CurrentBook() {
 return (
  <CurrentBookDiv>
   <img src="https://m.media-amazon.com/images/I/81zN7udGRUL.jpg" alt="livro" />
   <div className="book-informations">
    <BookTitleAndDate>
     <div>
      <p>Duna</p>
      <p>Frank Hebert</p>
     </div>
     <p> 24/05 a 24/06</p>
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
  border-radius: 5px;
  margin-right: 40px;
 }
 .book-informations-bottom {
  margin-top: 20px;
  font-size: 20px;
  text-align: justify;
  width: 500px;
  overflow: hidden;
  height: 11ch;
 }
`;
