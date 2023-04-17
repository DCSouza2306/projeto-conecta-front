import { useContext } from "react";
import styled from "styled-components";
import BackgroundContext from "../../context/backgroundContext";
import { EditCurrentReading } from "../EditGroup/EditCurrentReading";

export function BackgroundFaded(){
    const {enable} = useContext(BackgroundContext);

    return(
        <BackgroundSection display={enable}>
            <EditCurrentReading />

        </BackgroundSection>
    )
}

const BackgroundSection = styled.section`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0 , 0 , 0.3);
position: fixed;
top: 0;
visibility: ${props => props.display ? "" : "hidden"};
z-index: 10000;
`