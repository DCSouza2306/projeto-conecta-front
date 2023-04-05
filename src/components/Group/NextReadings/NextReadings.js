import styled from "styled-components";
import { NextReadingsBox } from "./NextReadingsBox";


export function NextReadings(){
    return(
        <Wrapper>
            <h3>Proximas leituras</h3>
            <NextReadingsBox />
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 830px;
height: 800px;
display: flex;
flex-direction: column;

h3{
    font-size: 28px;
    font-weight: 500;
    padding-left: 50px;
}
`


