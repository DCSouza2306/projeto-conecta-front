import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import Box from "../../Box";

export function About() {
 const { groupData } = useContext(GroupContext);
 return (
  <AboutDiv>
   <p className="about-group">Sobre o Grupo</p>
   <p className="about-group-text">{groupData?.about}</p>
  </AboutDiv>
 );
}

const AboutDiv = styled(Box)`
 margin-top: 30px;
 flex-direction: column;
 justify-content: center;
 width: 1240px;
 height: 220px;
 padding: 0 50px;
 .about-group {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
 }
 .about-group-text {
  font-size: 24px;
  text-align: justify;
 }
`;
