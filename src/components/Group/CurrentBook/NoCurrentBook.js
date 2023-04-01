import CurrentBookDiv from "./CurrentBook";
import styled from "styled-components";

export function NoCurrentBook(){
    return(
        <NoCurrentBookDiv>
            <p>Não há nenhuma leitura atualmente</p>
        </NoCurrentBookDiv>
    )
}

const NoCurrentBookDiv = styled(CurrentBookDiv)`
align-items: flex-start;
justify-content: left;
padding: 2rem;
`
