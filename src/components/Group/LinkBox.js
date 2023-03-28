import styled from "styled-components";
import Box from "../Box";

export function LinkBox() {
 return <LinkBoxDiv>
 <p>Instagram</p>
 <p>Whatsapp</p>
 </LinkBoxDiv>;
}

const LinkBoxDiv = styled(Box)`
 width: 365px;
 flex-direction: column;
 height: 190px;
 padding: 30px;
 margin-top: 30px;
 
 p{
    margin-bottom: 20px;
    cursor: pointer;
 }
`;
