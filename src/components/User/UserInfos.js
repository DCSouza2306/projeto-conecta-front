import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../context/userContext";
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";

export function UserInfos() {
 const { userData } = useContext(UserContext);
 return (
  <Wrapper>
   <div className="user-infos-left">
    <img src={userData?.urlImage} alt="user" />
    <div className="user-social-medias">
     <AiFillInstagram />
     <AiFillFacebook />
     <AiFillTwitterCircle />
    </div>
   </div>
   <div className="user-infos-right">
    <h1>{userData?.userName}</h1>
    <p>{userData?.about}</p>
   </div>
  </Wrapper>
 );
}

const Wrapper = styled.div`
 width: 505px;
 height: 280px;
 display: flex;

 .user-infos-left {
  width: 180px;
  height: 100%;

  img {
   width: 180px;
   border-radius: 100%;
  }

  .user-social-medias {
   font-size: 1.8rem;
   color: #5c548c;
   display: flex;
   justify-content: space-around;
   margin-top: 1rem;
  }
 }

 .user-infos-right {
  width: 325px;
  height: 100%;
  padding-left: 1rem;
  padding-top: 2rem;

  h1 {
   font-size: 1.8rem;
   height: 4rem;
  }
 }
`;
