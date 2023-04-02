import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { GroupExplore } from "../../components/Explore/GroupExplore";
import Container from "../../components/Container";
import { useGroups } from "../../hooks/api/useGroups";
import { Loading } from "../../components/Loading";

export function Explore() {
 const { groupsData, groupsLoading, groupsError } = useGroups();
 return (
  <ExploreSection>
   <Header />
   {groupsLoading || groupsError ? (
    <Loading />
   ) : (
    <Container>
     <h2>Explore todos os grupos</h2>
      {groupsData.map((e) => {
       return (
        <GroupExplore
         key={e.id}
         id={e.id}
         name={e.name}
         description={e.description}
         urlImage={e.urlImage}
         status={e.status}
        />
       );
      })}
    </Container>
   )}
  </ExploreSection>
 );
}

const ExploreSection = styled.section`
 h2 {
  margin-top: 3rem;
  margin-bottom: 1.8rem;
  font-size: 3rem;
  text-align: center;
 }
`;
