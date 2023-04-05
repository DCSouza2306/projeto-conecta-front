import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { GroupExplore } from "../../components/ExploreGroups/GroupExplore";
import Container from "../../components/Layout/Container";
import { useGroups } from "../../hooks/api/useGroups";
import { Loading } from "../../components/Utils/Loading";

export function ExploreGroups() {
 const { groupsData, groupsLoading, groupsError } = useGroups();
 return (
  <>
   <Header />
   {groupsLoading || groupsError ? (
    <Loading />
   ) : (
    <ExploreGroupsSection>
     <h1>Explore todos os grupos</h1>
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
    </ExploreGroupsSection>
   )}
  </>
 );
}

const ExploreGroupsSection = styled(Container)`
 h1 {
  padding-top: 3rem;
  margin-bottom: 1.8rem;
  font-size: 3rem;
  text-align: center;
 }
`;
