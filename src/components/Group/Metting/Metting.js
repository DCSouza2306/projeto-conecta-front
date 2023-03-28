import styled from "styled-components";
import { MettingBox } from "./MettingBox";

export function Metting() {
 return (
  <MettingDiv>
   <h3>Encontro</h3>
   <MettingBox />
  </MettingDiv>
 );
}

const MettingDiv = styled.div`
margin-top: 30px;
 width: 410px;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 h3 {
    margin-top: 20px;
    font-size: 28px;
    font-weight: 500;
    align-self: flex-start;
    padding-left: 50px;
 }
`;
