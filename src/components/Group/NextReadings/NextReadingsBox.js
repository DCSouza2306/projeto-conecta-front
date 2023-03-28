import styled from "styled-components";
import Box from "../../Box";
import { NextBook } from "./NextBook";

export function NextReadingsBox() {
 return (
  <NextReadingsBoxDiv>
    <NextBook />
    <NextBook />
    <NextBook />
    <NextBook />
  </NextReadingsBoxDiv>
 );
}

const NextReadingsBoxDiv = styled(Box)`
 width: 770px;
 height: 690px;
 margin-top: 30px;
 display: flex;
 flex-direction: column;

`;
