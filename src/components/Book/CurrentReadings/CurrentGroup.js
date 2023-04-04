import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";

export function CurrentGroup() {
 return (
  <CurrentGroupDiv>
   <img
    src="https://cfvila.com.br/blog/wp-content/uploads/2019/10/clubes-leitura.jpg"
    alt="grupo de leitura"
   />
   <div className="name-status-group">
    <p>Nome do Grupoooooooooooooooooooooooo</p>
    <div className="status-group-current">
     <AiFillCheckCircle />
     <p>Aberto</p>
    </div>
   </div>
  </CurrentGroupDiv>
 );
}

const CurrentGroupDiv = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 width: 270px;
 height: 90px;
 margin-top: 1rem;
 font-size: 1.15rem;

 p:first-child {
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
 }

 img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
 }

 .status-group-current {
  color: #8ab799;
  display: flex;
  margin-top: 0.45rem;
  p{
    margin-left: 0.65rem;
  }
 }
`;
