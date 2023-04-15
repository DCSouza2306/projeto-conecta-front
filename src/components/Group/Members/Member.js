import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function Member({ id, name, urlImage, position }) {
   const navigate = useNavigate();

   function navigateUser(){
      navigate(`/user/${name}`)
   }

 let memberType;

 switch (position) {
  case "owner":
   memberType = "Dono";
   break;
  case "administrator":
   memberType = "Mediador";
   break;
  case "member":
   memberType = "Membro";
   break;

  default:
   break;
 }
 return (
  <MemberLi>
   <img src={urlImage} alt="user" onClick={() => navigateUser()}/>
   <p className="meeting-member-name">{name}</p>
   <p className="meeting-member-status">{memberType}</p>
  </MemberLi>
 );
}

const MemberLi = styled.li`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 350px;
 margin-bottom: 1.5rem;
 img {
  border-radius: 100%;
  width: 60px;
  cursor: pointer;
 }

 .meeting-member-name{
    width: 160px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
 }

 .meeting-member-status{
    width: 90px;

 }
`;
