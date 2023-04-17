import { useContext } from "react";
import styled from "styled-components";
import BackgroundContext from "../../context/backgroundContext";
import { EditCurrentReading } from "../EditGroup/EditCurrentReading";
import { EditNextReading } from "../EditGroup/EditNextReading";

export function BackgroundFaded() {
 const { enable, typeContainer } = useContext(BackgroundContext);
 console.log(typeContainer)

 return (
  <BackgroundSection display={enable}>
    {typeContainer === "CURRENT" && <EditCurrentReading />}
    {typeContainer === "NEXT" && <EditNextReading />}
   
  </BackgroundSection>
 );
}

const BackgroundSection = styled.section`
 width: 100vw;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(0, 0, 0, 0.3);
 position: fixed;
 top: 0;
 visibility: ${(props) => (props.display ? "" : "hidden")};
 z-index: 10000;
`;
