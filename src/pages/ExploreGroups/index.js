import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { GroupExplore } from "../../components/ExploreGroups/GroupExplore";
import Container from "../../components/Layout/Container";
import { useGroups } from "../../hooks/api/useGroups";
import { Loading } from "../../components/Utils/Loading";

export function ExploreGroups() {
 const { groupsData, groupsLoading, groupsError } = useGroups();
 return (
  <ExploreGroupsSection>
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
  </ExploreGroupsSection>
 );
}

const ExploreGroupsSection = styled.section`
 h2 {
  margin-top: 3rem;
  margin-bottom: 1.8rem;
  font-size: 3rem;
  text-align: center;
 }
`;
