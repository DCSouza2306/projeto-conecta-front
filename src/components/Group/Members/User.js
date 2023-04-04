import styled from "styled-components";

export function User({ id, name, urlImage, position }) {
 let memberType;

 switch (position) {
  case "OWNER":
   memberType = "Dono";
   break;
  case "OFFICER":
   memberType = "Mediador";
   break;
  case "MEMBER":
   memberType = "Membro";
   break;

  default:
   break;
 }
 return (
  <UserDiv>
   <img src={urlImage} alt="user" />
   <p className="meeting-member-name">{name}</p>
   <p className="meeting-member-status">{memberType}</p>
  </UserDiv>
 );
}

const UserDiv = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 350px;
 margin-bottom: 1.5rem;
 img {
  border-radius: 100%;
  width: 60px;
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
