import styled from "styled-components";
import { CurrentBook } from "./CurrentBook";

export function CurrentReading(){
    return(
        <CurrentReadingDiv>
            <h3>Leitura Atual</h3>
            <CurrentBook />
        </CurrentReadingDiv>
    )
}

export const CurrentReadingDiv = styled.div`
margin-top: 30px;
width: 830px;
display: flex;
flex-direction: column;
h3{
    margin-top: 20px;
    font-size: 28px;
    font-weight: 500;
    padding-left: 50px;
}
`