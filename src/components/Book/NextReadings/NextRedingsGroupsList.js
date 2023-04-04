import styled from "styled-components";
import { NextGroup } from "./NextGroup";
import Box from "../../Box";
import ButtonStyled from "../../ButtonStyled";

export function NextReadingsGroupsList() {
 return (
  <NextReadingsGroupsListDiv>
   <div className="next-readings-group-label">
    <p>Grupo</p>
    <p>Inicio leitura</p>
    <p>Status do Grupo</p>
   </div>
   <NextGroup />
   <NextGroup />
   <ButtonShowAll>Exibir todos</ButtonShowAll>
  </NextReadingsGroupsListDiv>
 );
}

const NextReadingsGroupsListDiv = styled(Box)`
 width: 860px;
 height: 280px;
 display: flex;
 flex-direction: column;
 align-items: center;

 .next-readings-group-label {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  width: 830px;
  height: 40px;
  border-bottom: 1px solid #9795a6;

  p {
   width: 250px;
   text-align: center;
  }
 }
`;

const ButtonShowAll = styled(ButtonStyled)`
 margin-top: 1rem;
 width: 200px;
 height: 40px;
 font-size: 1.25rem;
`;

export default ButtonShowAll;
