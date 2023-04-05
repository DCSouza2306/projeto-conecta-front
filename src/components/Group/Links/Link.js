import { useContext } from "react";
import styled from "styled-components";
import GroupContext from "../../../context/groupContext";
import { LinkBox } from "./LinkBox";
import { NoLinks } from "./NoLinks";

export function Link() {
 const { groupData } = useContext(GroupContext);
 const links = groupData?.Links;
 return (
  <Wrapper>
   <h3>Links</h3>
   {links?.id == undefined ? <NoLinks /> : <LinkBox url={links} />}
  </Wrapper>
 );
}

const Wrapper = styled.div`
 width: 410px;
 height: 350px;
 display: flex;
 flex-direction: column;
 align-items: flex-end;

 h3 {
  font-size: 28px;
  font-weight: 500;
  align-self: flex-start;
  padding-left: 50px;
 }
`;
