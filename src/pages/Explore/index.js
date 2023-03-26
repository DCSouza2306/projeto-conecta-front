import styled from "styled-components";
import { Header } from "../../components/Header";
import { GroupExplore } from "../../components/GroupExplore";

export function Explore(){
    return(
    <ExploreDiv>
        <Header />
        <h2>Explore todos os grupos</h2>
        <GroupExplore />        
        <GroupExplore />        
    </ExploreDiv>)
}

const ExploreDiv = styled.div`
h2{
    margin-top: 60px;
    margin-bottom: 30px;
    font-size: 48px;
    text-align: center;
}
`