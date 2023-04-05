import styled from "styled-components";
import { CurrentBookBox } from "./CurrentBook";

export function CurrentReading() {
 return (
  <Wrapper>
   <h3>Leitura Atual</h3>
   <CurrentBookBox />
  </Wrapper>
 );
}

export const Wrapper = styled.div`
 margin-top: 30px;
 width: 830px;
 display: flex;
 flex-direction: column;
 h3 {
  margin-top: 20px;
  font-size: 28px;
  font-weight: 500;
  padding-left: 50px;
 }
`;
