import { useState } from "react";
import styled from "styled-components";
import { useQuery } from "../../hooks/useQuery";
import { useNavigate, useParams } from "react-router-dom";

export function NavBarOptions() {
 const navigate = useNavigate();
 const urlQuery = useQuery();
 const [selected, setSelected] = useState("infos");
 const {groupId} = useParams()

 function toggleOption(params) {
  urlQuery.set("options", params);
  navigate(`/group/${groupId}/edit?options=${params}`);
  setSelected(params);
 }
 return (
  <NavBarOptionsDiv selectedItem={selected}>
   <ul>
    <li onClick={() => toggleOption("infos")} className="nav-bar-options-info">
     Informações
    </li>
    <li
     onClick={() => toggleOption("book-list")}
     className="nav-bar-options-list"
    >
     Lista de Leitura
    </li>
    <li
     onClick={() => toggleOption("meeting")}
     className="nav-bar-options-meeting"
    >
     Reuniões
    </li>
    <li
     onClick={() => toggleOption("members")}
     className="nav-bar-options-members"
    >
     Membros
    </li>
   </ul>
  </NavBarOptionsDiv>
 );
}

const NavBarOptionsDiv = styled.div`
 width: 1240px;
 height: 95px;
 background-color: #e6e3f9;
 border-radius: 5px;
 margin-top: 1rem;
 ul {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.8rem;
  color: #5c548c;
  li {
   cursor: pointer;
  }

  .nav-bar-options-info {
   text-decoration: 3px ${(props) =>
    props.selectedItem === "infos" ? "underline" : ""} ;
  }



  .nav-bar-options-list {
    text-decoration: 3px ${(props) =>
    props.selectedItem === "book-list" ? "underline" : ""} ;
  }

  .nav-bar-options-meeting {
    text-decoration: 3px ${(props) =>
    props.selectedItem === "meeting" ? "underline" : ""} ;
  }

  .nav-bar-options-members {
    text-decoration: 3px ${(props) =>
    props.selectedItem === "members" ? "underline" : ""} ;
  }
 }
`;
