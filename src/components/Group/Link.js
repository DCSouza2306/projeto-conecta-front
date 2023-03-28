import styled from "styled-components";
import { LinkBox } from "./LinkBox";

export function Link() {
 return (
    <LinkDiv>
    <h3>Links</h3>
    <LinkBox />
    </LinkDiv>
 )
};

const LinkDiv = styled.div`
 width: 410px;
 height: 350px;
 display: flex;
 flex-direction: column;
 align-items: flex-end;

 h3{
    margin-top: 30px;
    font-size: 28px;
    font-weight: 500;
    align-self: flex-start;
    padding-left: 50px;
}
`;


