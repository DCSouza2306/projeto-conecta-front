import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { GroupExplore } from "../../components/Explore/GroupExplore";
import Container from "../../components/Container";

export function Explore() {
 return (
  <ExploreDiv>
   <Header />
   <Container>
    <h2>Explore todos os grupos</h2>
    <GroupExplore />
    <GroupExplore />
   </Container>
  </ExploreDiv>
 );
}

const ExploreDiv = styled.div`
 h2 {
  margin-top: 60px;
  margin-bottom: 30px;
  font-size: 48px;
  text-align: center;
 }
`;
