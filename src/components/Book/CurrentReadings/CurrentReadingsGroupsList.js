import styled from "styled-components";
import Box from "../../Box";
import { CurrentGroup } from "./CurrentGroup";
import ButtonShowAll from "../NextReadings/NextRedingsGroupsList";

export function CurrentReadingsGroupsList() {
 return (
  <CurrentReadingsGroupsListDiv>
   <div className="current-list-container">
    <CurrentGroup />
    <CurrentGroup />
   </div>
   <ButtonShowAll>Exibir todos</ButtonShowAll>
  </CurrentReadingsGroupsListDiv>
 );
}

const CurrentReadingsGroupsListDiv = styled(Box)`
 height: 280px;
 width: 285px;
 flex-direction: column;
 align-items: center;

 .current-list-container{
    height: 200px;
 }
`;
