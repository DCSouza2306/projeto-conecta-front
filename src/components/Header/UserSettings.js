import styled from "styled-components";

export function UserSettings(params) {
 
 const {setShowBox, showBox} = params
 function togleBox(){
    setShowBox(!showBox);
 }

 return (
  <>
   <UserSettingsLi>
    <a>
     <img src={params.user.urlImage} />
     <p onClick={()=> togleBox()}>{params.user.userName}</p>
    </a>
   </UserSettingsLi>
  
  </>
 );
}

const UserSettingsLi = styled.li`
 a {
  display: flex;
  align-items: center;
 }
 p {
  margin-left: 1rem;
 }
 img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
 }
`;
