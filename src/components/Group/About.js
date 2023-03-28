import styled from "styled-components";
import Box from "../Box";

export function About() {
 return (
  <AboutDiv>
   <p className="about-group">Sobre o Grupo</p>
   <p className="about-group-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisl
    quam, sollicitudin facilisis vestibulum ut, sollicitudin at felis.
    Vestibulum vitae blandit mi. Mauris sed pretium mi. Aliquam sit amet
    suscipit ex. Sed hendrerit gravida est. Curabitur vel porta dui.
   </p>
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
