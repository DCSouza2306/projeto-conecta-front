import { Header } from "../../components/Header";
import styled from "styled-components";
import imagem from "../../assets/images/people-reading.jpg";

export function Home() {
 return (
  <HomeDiv>
   <Header />
   <div className="text-home">
    <h2>Se conecte nesse mundo fantástico</h2>
    <h3>Diversos clubes de leitura em um único lugar</h3>
   </div>
   <img src={imagem} alt="people reading"/>
  </HomeDiv>
 );
}
const HomeDiv = styled.div`
 height: 100vh;
 display: flex;
 flex-direction: column;
 img{
  height: 400px;
  width: 900px;
  margin: 0 auto;
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
  h3{
    font-size: 48px;
    margin-left: -60px;
  }
 }
`;
