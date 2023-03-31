import Loader from "react-loader-spinner";
import styled from "styled-components";

export function Loading() {
 return (
  <LoadingDiv>
   <Loader color="#5c548c" type="Oval" visible={true} />
   <p>Carregando</p>
  </LoadingDiv>
 );
}

const LoadingDiv = styled.div`
margin-top: 250px;
font-size: 28px;
display: flex;
align-items: center;
justify-content: center;

p{
    margin-left: 20px;
}
`;
