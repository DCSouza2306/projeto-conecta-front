import styled from "styled-components";
import { AiFillApi } from "react-icons/ai";

export function Header() {
 return (
  <HeaderDiv>
   <div className="logo-image">
    <p>Conecta</p>
    <AiFillApi color="#FFF" />
   </div>
   <div className="menu">
    <p>Pagina Inicial</p>
    <p>Explorar</p>
    <p>Meus Grupos</p>
    <p>Entrar / Cadastrar</p>
   </div>
  </HeaderDiv>
 );
}

const HeaderDiv = styled.div`
 height: 120px;
 background-color: #8e82d9;
 color: #fff;
 display: flex;
 align-items: center;
 justify-content: space-between;

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

 .menu {
  display: flex;
  font-size: 18px;
  p{
   margin-right: 50px;
  };
  margin-right: 50px;
 }
`;
