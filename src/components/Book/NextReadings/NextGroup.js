import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";

export function NextGroup() {
 return (
  <NextGroupDiv>
   <div className="image-name-group">
    <img
     src="https://cfvila.com.br/blog/wp-content/uploads/2019/10/clubes-leitura.jpg"
     alt="logo grupo de leitura"
    />
    <p>Nome do Grupo</p>
   </div>

   <p className="start-reading-group">24/05/2023</p>
   <div className="status-group">
    <AiFillCheckCircle />
    <p>Aberto</p>
   </div>
  </NextGroupDiv>
 );
}

const NextGroupDiv = styled.div`
width: 830px;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1.15rem;
margin-top: 0.65rem;
 img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
 }

 .start-reading-group, .image-name-group, .status-group{
    width: 250px;
 }

 .start-reading-group{
    text-align: center;
 }

 .image-name-group {
  display: flex;
  align-items: center;
  justify-content: start;

  p{
    margin-left: 1.15rem;
  }
 }

 .status-group{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8ab799;
    p{
      margin-left: 0.65rem;
    }
 }
 
`;
