import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import Box from "../../Layout/Box";

export function LinkBox() {
   const { groupData } = useContext(GroupContext);
   const links = groupData?.Links;
 return (
  <LinkBoxDiv>
   {links?.map((e) => {
      return <p>{e.url}</p>
   })}
  </LinkBoxDiv>
 );
}

const LinkBoxDiv = styled(Box)`
 width: 365px;
 flex-direction: column;
 height: 190px;
 padding: 30px;
 margin-top: 30px;

 p {
  margin-bottom: 20px;
  cursor: pointer;
 }
`;

export default LinkBoxDiv;
