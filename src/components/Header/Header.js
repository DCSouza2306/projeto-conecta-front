import styled from "styled-components";
import { AiFillApi } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate()
    function changePage(dist){
        navigate(`/${dist}`)
    }
 return (
  <HeaderHead>
   <div className="logo-image">
    <p>Conecta</p>
    <AiFillApi color="#FFF" />
   </div>
   <div className="menu">
    <button onClick={() => changePage("")}>Pagina Inicial</button>
    <button onClick={() => changePage("explore")}>Explorar</button>
    <button>Meus Grupos</button>
    <button>Entrar / Cadastrar</button>
   </div>
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

 .menu {
  display: flex;
  font-size: 22px;
  button{
   margin-right: 50px;
   font-size: 22px;
   border: none;
   color: #fff;
   background-color: transparent;
   :hover {
    cursor: pointer;
    text-decoration: underline;
   }
  
  };
  margin-right: 50px;
 }
`;
