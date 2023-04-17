import styled from "styled-components";
import { AiFillApi } from "react-icons/ai";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { UserSettings } from "./UserSettings";
import { UserSettingsBox } from "./UserSettingsBox";
import { useState } from "react";

export function Header() {
 const { userProfileData } = useContext(UserContext);
 const [showBox, setShowBox] = useState(false)
 return (
  <HeaderHead>
   <div className="logo-image">
    <p>Conecta</p>
    <AiFillApi color="#FFF" />
   </div>
   <nav>
    <ul>
     <li>
      <a href={`/`}>Pagina Inicial</a>
     </li>
     <li>
      <a href={`/explore/groups`}>Explorar</a>
     </li>
     <li>
      <a href={`/explore/books`}>Livros</a>
     </li>
     {userProfileData?.token ? (
      <UserSettings user={userProfileData.user} showBox={showBox} setShowBox={setShowBox} />
     ) : (
      <li>
       <a href={`/login`}>Entrar/Cadastrar</a>
      </li>
     )}
    </ul>
   </nav>
   <UserSettingsBox displaySettings={showBox}/>
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
  ul {
   display: flex;
   font-size: 22px;

   li{
    height: 60px;
    display: flex;
    align-items: center;
   }
  }
  a {
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
  }
  margin-right: 50px;
 }
`;
