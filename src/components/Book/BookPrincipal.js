import styled from "styled-components";

export function BookPrincipal() {
 return (
  <BookPrincipalDiv>
   <img src="https://m.media-amazon.com/images/I/81zN7udGRUL.jpg" alt="livro" />
   <div className="book-principal-informations">
    <h2>Duna</h2>
    <h3>Frank Hebert</h3>
    <p>
     A vida do jovem Paul Atreides está prestes a mudar radicalmente. Após a
     visita de uma mulher misteriosa, ele é obrigado a deixar seu planeta natal
     para sobreviver ao ambiente árido e severo de Arrakis, o Planeta Deserto.
     Envolvido numa intrincada teia política e religiosa, Paul divide-se entre
     as obrigações de herdeiro e seu treinamento nas doutrinas secretas de uma
     antiga irmandade, que vê nele a esperança de realização de um plano urdido
     há séculos.
    </p>
   </div>
  </BookPrincipalDiv>
 );
}

const BookPrincipalDiv = styled.div`
 width: 1240px;
 height: 50vh;
 display: flex;
 align-items: center;

 img {
  width: 280px;
  border-radius: 5px;
 }

 .book-principal-informations {
  height: 400px;
  width: 980px;
  padding-left: 1.45rem;

  h2{
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  h3{
    font-size: 2rem;
    color: #666666;
    margin-bottom: 1rem;
  }

  p{
    font-size: 1.35rem;
    text-align: justify;
  }
 }
`;
