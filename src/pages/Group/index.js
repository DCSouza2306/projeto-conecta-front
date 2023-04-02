import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { About } from "../../components/Group/About/About";
import { CurrentReading } from "../../components/Group/CurrentBook/CurrentReading";
import { Meeting } from "../../components/Group/Meeting/Meeting";
import ButtonStyled from "../../components/ButtonStyled";
import { NextReadings } from "../../components/Group/NextReadings/NextReadings";
import Container from "../../components/Container";
import { Link } from "../../components/Group/Links/Link";
import { UserList } from "../../components/Group/Members/UserList";
import { useParams } from "react-router-dom";
import { useGroupId } from "../../hooks/api/useGroupId";
import { useContext, useEffect } from "react";
import GroupContext from "../../context/groupContext";
import { Loading } from "../../components/Loading";

export function Group() {

 const { groupId } = useParams();
 const { groupIdData, groupIdLoading, groupIdError } = useGroupId(groupId);
 const { setGroupData, groupData } = useContext(GroupContext);

 useEffect(() => {
  setGroupData(groupIdData);
 }, [groupIdLoading]);
 return (
  <GroupSection>
    <Header />
   {(groupIdLoading || groupIdError) ? (
    <LoadingGroup />
   ) : (
    <section>
     <Container>
      <div className="image-name-group">
       <img src={groupData?.urlImage} alt="livro" />
       <h2>{groupData?.name}</h2>
       <ButtonRequest>Solicitar</ButtonRequest>
      </div>

      <About />

      <div className="reading-meeting">
       <CurrentReading />
       <div className="line" />
       <Meeting />
      </div>
     </Container>

     <ContainerSecond>
      <NextReadings />
      <div className="line-second" />
      <div>
       <Link />
       <UserList />
      </div>
     </ContainerSecond>
    </section>
   )}
  </GroupSection>
 );
}

const ContainerSecond = styled(Container)`
 display: flex;
 .line-second {
  margin-top: 70px;
  width: 1px;
  height: 680px;
  background-color: #9795a6;
 }
`;

const GroupSection = styled.section`
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

 .reading-meeting {
  display: flex;

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

const LoadingGroup = styled(Loading)`
   background-color: red;
`
