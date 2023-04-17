import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function UserSettingsBox({ displaySettings }) {
 const navigate = useNavigate();
 function clearData() {
  window.localStorage.clear();
  window.location.reload();
  navigate("/");
 }
 function navigatePages(params) {
  navigate(params);
 }
 return (
  <UserSettingsBoxDiv displaySettings={displaySettings}>
   <ul>
    <li>
     Meu perfil
    </li>
    <li onClick={() => navigatePages("/user/my-groups")}>
     Meus Grupos
    </li>
    <li onClick={() => navigatePages("/group/create")}>
     Criar Grupo
    </li>
    <li onClick={() => clearData()}>
     Sair
    </li>
   </ul>
  </UserSettingsBoxDiv>
 );
}

const UserSettingsBoxDiv = styled.div`
 width: 200px;
 height: 180px;
 background-color: #8e82d9;
 position: fixed;
 right: 60px;
 top: 100px;
 transition: transform 1s;
 border-radius: 0 0 25px 25px;
 transform: ${(props) => (props.displaySettings ? "" : "translate(310px)")};

 ul {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  li {
   font-size: 1.3rem;
   cursor: pointer;
   :hover {
    text-decoration: underline;
   }

   a {
    text-decoration: none;
   }
  }
 }
`;
