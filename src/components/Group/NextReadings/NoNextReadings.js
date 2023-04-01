import NextReadingsBoxDiv from "./NextReadingsBox";
import styled from "styled-components";

export function NoNextReadings(){
    return (
        <NoNextReadingsBox>
            <p>Não há proximas leituras</p>
        </NoNextReadingsBox>
    )
}

const NoNextReadingsBox = styled(NextReadingsBoxDiv)`
padding: 2rem;
`