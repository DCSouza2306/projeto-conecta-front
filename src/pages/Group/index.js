import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { About } from "../../components/Group/About/About";
import { CurrentReading } from "../../components/Group/CurrentBook/CurrentReading";
import { Metting } from "../../components/Group/Metting/Metting";
import ButtonStyled from "../../components/ButtonStyled";
import { NextReadings } from "../../components/Group/NextReadings/NextReadings";
import Container from "../../components/Container";
import { Link } from "../../components/Group/Links/Link";
import { UserList } from "../../components/Group/Members/UserList";

export function Group() {
 return (
  <GroupPage>
   <Header />
   <Container>
    <div className="image-name-group">
     <img
      src="https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png"
      alt="livro"
     />
     <h2>Grupo de Fantasia</h2>
     <ButtonRequest>Solicitar</ButtonRequest>
    </div>

    <About />

    <div className="reading-metting">
     <CurrentReading />
     <div className="line" />
     <Metting />
    </div>
   </Container>

   <ContainerSecond>
    <NextReadings />
    <div className="line" />
    <div>
     <Link />
     <UserList />
    </div>
   </ContainerSecond>
  </GroupPage>
 );
}

const ContainerSecond = styled(Container)`
 display: flex;
`;

const GroupPage = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 .image-name-group {
  margin-top: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid #9795a6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
   width: 120px;
   height: 120px;
   border-radius: 100%;
  }
  h2 {
   font-size: 48px;
  }
 }

 .reading-metting {
  display: flex;
  width: 1240px;
  margin: 0 auto;

  .line {
   margin-top: 70px;
   width: 1px;
   height: 350px;
   background-color: #9795a6;
  }
 }
`;

const ButtonRequest = styled(ButtonStyled)`
 width: 375px;
 font-size: 32px;
 height: 90px;
`;
