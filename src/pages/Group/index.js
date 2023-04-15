import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { About } from "../../components/Group/About/About";
import { CurrentReading } from "../../components/Group/CurrentBook/CurrentReading";
import { Meeting } from "../../components/Group/Meeting/Meeting";
import ButtonStyled from "../../components/Layout/ButtonStyled";
import { NextReadings } from "../../components/Group/NextReadings/NextReadings";
import Container from "../../components/Layout/Container";
import { Link } from "../../components/Group/Links/Link";
import { MemberList } from "../../components/Group/Members/MemberList";
import { useParams } from "react-router-dom";
import { useGroupId } from "../../hooks/api/useGroupId";
import { useContext, useEffect } from "react";
import GroupContext from "../../context/groupContext";
import { Loading } from "../../components/Utils/Loading";
import { Page } from "../ExploreGroups/Page";
import PageDiv from "../ExploreGroups/Page";
import { ButtonsGroup } from "../../components/Group/Buttons/ButtonsGroup";

export function Group() {
 const { groupId } = useParams();
 const { groupIdData, groupIdLoading, groupIdError } = useGroupId(groupId);
 const { setGroupData, groupData } = useContext(GroupContext);
 useEffect(() => {
  setGroupData(groupIdData);
 }, [groupIdLoading]);
 return (
  <>
   <Header />
   {groupIdLoading || groupIdError ? (
    <Loading />
   ) : (
    <GroupSection>
     <Page>
      <div className="image-name-group">
       <img src={groupData?.urlImage} alt="livro" />
       <h1>{groupData?.name}</h1>
       <ButtonsGroup groupStatus={groupData?.status} memberStatus={groupData?.Members}/>
       
      </div>

      <About />

      <div className="reading-meeting">
       <CurrentReading />
       <div className="line" />
       <Meeting />
      </div>
     </Page>

     <SecondPage>
      <NextReadings />
      <div className="line-second" />
      <div>
       <Link />
       <MemberList />
      </div>
     </SecondPage>
    </GroupSection>
   )}
  </>
 );
}

const GroupSection = styled(Container)`
 height: calc(200vh - 200px);
 .image-name-group {
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
  h1 {
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

const SecondPage = styled(PageDiv)`
display: flex;
  .line-second {
   margin-top: 70px;
   width: 1px;
   height: 680px;
   background-color: #9795a6;
  }
`

const ButtonRequest = styled(ButtonStyled)`
 width: 375px;
 font-size: 32px;
 height: 90px;
`;
