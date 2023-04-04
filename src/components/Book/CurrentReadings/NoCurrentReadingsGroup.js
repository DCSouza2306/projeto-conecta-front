import styled from "styled-components";
import Box from "../../Box";

export function NoCurrentReadingsGroups(){
    return(
        <NoCurrentReadingsGroupsDiv>
            <p>Não há grupos lendo esse livro atualmente</p>
        </NoCurrentReadingsGroupsDiv>
    )
}

const NoCurrentReadingsGroupsDiv = styled(Box)`
height: 280px;
 width: 285px;
 display: flex;
 justify-content: center;
 padding-top: 1.5rem;

 p{
    width: 200px;
    text-align: center;
 }
`