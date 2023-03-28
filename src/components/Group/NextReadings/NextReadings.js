import styled from "styled-components";
import { NextReadingsBox } from "./NextReadingsBox";


export function NextReadings(){
    return(
        <NextReadingsDiv>
            <h3>Proximas leituras</h3>
            <NextReadingsBox />
        </NextReadingsDiv>
    )
}

const NextReadingsDiv = styled.div`
width: 830px;
height: 800px;
display: flex;
flex-direction: column;

h3{
    margin-top: 30px;
    font-size: 28px;
    font-weight: 500;
    padding-left: 50px;
}
`


