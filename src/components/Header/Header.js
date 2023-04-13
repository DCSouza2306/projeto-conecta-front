import styled from "styled-components";
import { AiFillApi } from "react-icons/ai";

export function Header() {
 return (
  <HeaderHead>
   <div className="logo-image">
    <p>Conecta</p>
    <AiFillApi color="#FFF" />
   </div>
   <nav>
    <ul>
        <li><a href={`/`}>Pagina Inicial</a></li>
        <li><a href={`/explore/groups`}>Explorar</a></li>
        <li><a href={`/explore/books`}>Livros</a></li>
        <li><a href={`/login`}>Entrar/Cadastrar</a></li>
    </ul>
   </nav>
  </HeaderHead>
 );
}

const HeaderHead = styled.header`
 height: 100px;
 width: 100%;
 background-color: #8e82d9;
 color: #fff;
 display: flex;
 align-items: center;
 justify-content: space-between;
 position: fixed;
 top: 0;
 right: 0;
 z-index: 1;

 .logo-image {
  font-family: "Black And White Picture", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 44px;
  height: 100%;
  width: 180px;
  margin-left: 10px;
  text-transform: uppercase;
 }

 nav {
  
  ul{
    display: flex;
  font-size: 22px;
  }
  a{
   margin-right: 50px;
   font-size: 22px;
   border: none;
   color: #fff;
   background-color: transparent;
   text-decoration: none;
   :hover {
    cursor: pointer;
    text-decoration: underline;
   }
  
  };
  margin-right: 50px;
 }
`;
