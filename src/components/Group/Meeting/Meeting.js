import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import { MeetingBox } from "./MeetingBox";

export function Meeting() {
 return (
  <Wrapper>
   <h3>Encontro</h3>
  <MeetingBox />
  </Wrapper>
 );
}

const Wrapper = styled.div`
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
