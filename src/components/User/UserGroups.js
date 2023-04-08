import styled from "styled-components";
import { GroupBox } from "./GroupBox";

export function UserGroups(){
    return(
        <Wrapper>
            <h2>Grupos</h2>
            <GroupBox />
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 505px;
height: 280px;
margin-top: 2rem;

h2{
    font-size: 1.8rem;
    font-weight: 500;
}
`