import { Header } from "../../components/Header/Header";
import styled from "styled-components";
import imagem from "../../assets/images/people-reading.jpg";
import Container from "../../components/Layout/Container";
import { useContext } from "react";
import UserContext from "../../context/userContext";

export function Home() {
const {userProfileData} = useContext(UserContext);
console.log(userProfileData);
 return (
  <HomeSection>
   <Header />
   <ContainerHome>
    <div className="text-home">
     <h2>Se conecte nesse mundo fantástico</h2>
     <h3>Diversos clubes de leitura em um único lugar</h3>
    </div>
    <img src={imagem} alt="people reading" />
   </ContainerHome>
  </HomeSection>
 );
}

const ContainerHome = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
`
const HomeSection = styled.section`
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 img {
  height: 400px;
  width: 900px;
 }

 .text-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  h2 {
   font-size: 102px;
   width: 933px;
   font-weight: 700;
   color: #838e9e;
   margin-bottom: 30px;
  }
  h3 {
   font-size: 48px;
   margin-left: -60px;
   margin-bottom: 40px;
  }
 }
`;
